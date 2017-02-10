// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ui.bootstrap', 'ngMessages', 'ngTouch', 'mobiscroll-datetime'])

    .run(function ($ionicPlatform, $rootScope) {
        $rootScope.applicationName = "";
        $rootScope.cpic = "中国太保";
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }


        });
    })

    .directive('comImageBox', ['$state', '$rootScope', function ($state, $rootScope) {
        var comImageBox = {
            restrict: 'E',   //element name <com-my-favor-item></com-my-favor-item>
            templateUrl: 'tem/showBigPic.html',
            transclude: false,
            templateNamespace: 'html',
            scope: false,
            link: {
                pre: function preLink(scope, element, attrs, controller) {

                    scope.Url = "";
                    scope.bigImage = false;

                    //显示图片
                    scope.showBigImage = function (imageName) {
                        scope.Url = imageName;
                        scope.bigImage = true;
                        $("ion-header-bar").hide();
                        $("ion-content").hide();
                        $(".LightBox").show();
                        $(".LightBox .ImgViewer img").css({
                            width: $(window).width(),
                            height: $(window).height(),
                            paddingTop: $(window).height() * 0.1,
                            paddingBottom: $(window).height() * 0.1
                        });
                        // $(".LightBox").show(150, function () {
                        //     $("ion-header-bar").hide();
                        //     $("ion-content").hide();
                        //     // $(".LightBox .ImgViewer img").each(function () {
                        //     //     var w = $(this).width();
                        //     //     var h = $(this).height();
                        //     //     $(this).css({
                        //     //         marginLeft: w / 2 * (-1),
                        //     //         marginTop: h / 2 * (-1)
                        //     //     })
                        //     // });
                        // });

                        //console.info(element.find("img"));
                        //每次点击放大图片之后需要绑定事件
                        element.find("img").on('touchstart', touchstartHandler);
                        element.find("img").on('touchmove', touchmoveHandler);
                        element.find("img").on('touchend', touchendHandler);
                    };
                    //隐藏图片
                    scope.hideBigImage = function () {
                        scope.bigImage = false;
                        $(".LightBox").hide(200);
                        $("ion-header-bar").show();
                        $("ion-content").show();
                    };


                    /*********************** 图片缩放功能开始***************************/

                    var elWidth, elHeight;

                    // mode : 'pinch' or 'swipe'
                    var mode = '';

                    // distance between two touche points (mode : 'pinch')
                    var distance = 0;
                    var initialDistance = 0;

                    // image scaling
                    var scale = 1;
                    var relativeScale = 1;
                    var initialScale = 1;
                    var maxScale = parseInt(attrs.maxScale, 10);
                    if (isNaN(maxScale) || maxScale <= 1) {
                        maxScale = 3;
                    }

                    // position of the upper left corner of the element
                    var positionX = 0;
                    var positionY = 0;

                    var initialPositionX = 0;
                    var initialPositionY = 0;

                    // central origin (mode : 'pinch')
                    var originX = 0;
                    var originY = 0;

                    // start coordinate and amount of movement (mode : 'swipe')
                    var startX = 0;
                    var startY = 0;
                    var moveX = 0;
                    var moveY = 0;


                    /**
                     * @param {object} 点击开始，初始化
                     */
                    function touchstartHandler(evt) {
                        //console.info("touchstart");
                        var touches = evt.originalEvent ? evt.originalEvent.touches : evt.touches;

                        startX = touches[0].clientX;
                        startY = touches[0].clientY;
                        initialPositionX = positionX;
                        initialPositionY = positionY;
                        moveX = 0;
                        moveY = 0;
                    }

                    /**
                     * @param {object} 手指移动
                     */
                    function touchmoveHandler(evt) {
                        //console.info("touch move");
                        var touches = evt.originalEvent ? evt.originalEvent.touches : evt.touches;

                        if (mode === '') {
                            if (touches.length === 1 && scale > 1) {

                                mode = 'swipe';

                            } else if (touches.length === 2) {

                                mode = 'pinch';

                                initialScale = scale;
                                initialDistance = getDistance(touches);
                                originX = touches[0].clientX -
                                    parseInt((touches[0].clientX - touches[1].clientX) / 2, 10) -
                                    element.find("img")[0].offsetLeft - initialPositionX;
                                originY = touches[0].clientY -
                                    parseInt((touches[0].clientY - touches[1].clientY) / 2, 10) -
                                    element.find("img")[0].offsetTop - initialPositionY;

                            }
                        }

                        if (mode === 'swipe') {
                            evt.preventDefault();

                            moveX = touches[0].clientX - startX;
                            moveY = touches[0].clientY - startY;

                            positionX = initialPositionX + moveX;
                            positionY = initialPositionY + moveY;

                            transformElement();

                        } else if (mode === 'pinch') {
                            evt.preventDefault();

                            distance = getDistance(touches);
                            relativeScale = distance / initialDistance;
                            scale = relativeScale * initialScale;

                            positionX = originX * (1 - relativeScale) + initialPositionX + moveX;
                            positionY = originY * (1 - relativeScale) + initialPositionY + moveY;

                            transformElement();

                        }
                        // console.info(mode, touches);
                    }

                    /**
                     * @param {object} 点击结束
                     */
                    function touchendHandler(evt) {
                        //console.info("touch end");
                        var touches = evt.originalEvent ? evt.originalEvent.touches : evt.touches;

                        if (mode === '' || touches.length > 0) {
                            return;
                        }

                        if (scale < 1) {

                            scale = 1;
                            positionX = 0;
                            positionY = 0;

                        } else if (scale > maxScale) {

                            scale = maxScale;
                            relativeScale = scale / initialScale;
                            positionX = originX * (1 - relativeScale) + initialPositionX + moveX;
                            positionY = originY * (1 - relativeScale) + initialPositionY + moveY;

                        } else {

                            if (positionX > 0) {
                                positionX = 0;
                            } else if (positionX < elWidth * (1 - scale)) {
                                positionX = elWidth * (1 - scale);
                            }
                            if (positionY > 0) {
                                positionY = 0;
                            } else if (positionY < elHeight * (1 - scale)) {
                                positionY = elHeight * (1 - scale);
                            }

                        }

                        transformElement(0.1);
                        mode = '';
                    }

                    /**
                     * @param {Array} 双指touch位置
                     * @return {number}
                     */
                    function getDistance(touches) {
                        var d = Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) +
                            Math.pow(touches[0].clientY - touches[1].clientY, 2));
                        return parseInt(d, 10);
                    }

                    /**
                     * @param {number} 动画时间
                     */
                    function transformElement(duration) {
                        console.info("transform");
                        var transition = duration ? 'all cubic-bezier(0,0,.5,1) ' + duration + 's' : '';
                        var matrixArray = [scale, 0, 0, scale, positionX, positionY];
                        var matrix = 'matrix(' + matrixArray.join(',') + ')';

                        element.find("img").css({
                            '-webkit-transition': transition,
                            transition: transition,
                            '-webkit-transform': matrix + ' translate3d(0,0,0)',
                            transform: matrix,
                            '-webkit-transformOrigin':'(300, 600)',
                            transformOrigin: (300, 600)
                        });
                    }

                    /***************** 图片缩放功能结束****************************/

                },

                post: function postLink(scope, element, attrs, controller) {
                }
            }
        };
        return comImageBox;
    }])

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(2);
        $ionicConfigProvider.backButton.icon('icon ion-ios-arrow-left positive');
        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.navBar.alignTitle('center');
        // note that you can also chain configs
        $ionicConfigProvider.tabs.position("bottom");
        //初始化常用数据


        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive


        // Each tab has its own nav history stack:

        //登录
            .state('logging', {
                url: '/logging',
                templateUrl: 'templates/logging.html',
                controller: 'loggingCtrl'

            })

            //首页
            .state('homepage', {
                url: '/logging/homepage',
                templateUrl: 'templates/homepage.html',
                controller: 'homepageCtrl'
            })

            //我的绩效
            .state('myPerformance', {
                url: '/logging/myPerformance',
                templateUrl: 'templates/myPerformance.html',
                controller: 'myPerformanceCtrl'
            })

            //我的任务
            .state('myTask', {
                url: '/logging/myTask',
                templateUrl: 'templates/myTask.html',
                controller: 'myTaskCtrl'
            })

            //我的任务--list
            .state('myTaskList', {
                url: '/logging/myTaskList',
                templateUrl: 'templates/myTaskList.html',
                controller: 'myTaskListCtrl'
            })

            //工作日志
            .state('logBook', {
                url: '/logging/logBook',
                templateUrl: 'templates/logBook.html',
                controller: 'logBookCtrl'
            })

            //工作日志--详情
            .state('logBookDetail', {
                url: '/logging/logBookDetail',
                templateUrl: 'templates/logBookDetail.html',
                controller: 'logBookDetailCtrl'
            })

            //重新分配
            .state('redistribution', {
                url: '/logging/redistribution',
                templateUrl: 'templates/redistribution.html',
                controller: 'redistributionCtrl'
            })

            //任务查询
            .state('taskSearch', {
                url: '/logging/taskSearch',
                templateUrl: 'templates/taskSearch.html',
                controller: 'taskSearchCtrl'
            })

            //任务详情
            .state('taskDetail', {
                url: '/logging/taskDetail',
                templateUrl: 'templates/taskDetail.html',
                controller: 'taskDetailCtrl'
            })
            //接收团队
            .state('receivingTeam', {
                url: '/logging/receivingTeam',
                templateUrl: 'templates/receivingTeam.html',
                controller: 'receivingTeamCtrl'
            })
            //接收人
            .state('recipient', {
                url: '/logging/recipient',
                templateUrl: 'templates/recipient.html',
                controller: 'recipientCtrl'
            })
            //任务跟进
            .state('taskFollowUp', {
                url: '/logging/taskFollowUp',
                templateUrl: 'templates/taskFollowUp.html',
                controller: 'taskFollowUpCtrl'
            })

            //任务跟进
            .state('taskFollowUp1', {
                url: '/logging/taskFollowUp1',
                templateUrl: 'templates/taskFollowUp1.html',
                controller: 'taskFollowUp1Ctrl'
            })
            //任务轨迹
            .state('taskTrajectory', {
                url: '/logging/taskTrajectory',
                templateUrl: 'templates/taskTrajectory.html',
                controller: 'taskTrajectoryCtrl'
            })
            //新建任务
            .state('addTask', {
                url: '/logging/addTask',
                templateUrl: 'templates/addTask.html',
                controller: 'addTaskCtrl'
            })

            //我的商机
            .state('myOpportunity', {
                url: '/logging/myOpportunity',
                templateUrl: 'templates/myOpportunity.html',
                controller: 'myOpportunityCtrl'
            })

            //注册
            .state('register', {
                url: '/logging/register',
                templateUrl: 'templates/register.html',
                controller: 'registerCtrl'
            })

            //方案销售
            .state('planSale', {
                url: '/logging/planSale',
                templateUrl: 'templates/planSale.html',
                controller: 'planSaleCtrl'
            })

            //我的方案--list
            .state('planSaleList', {
                url: '/logging/planSaleList',
                templateUrl: 'templates/planSaleList.html',
                controller: 'planSaleListCtrl'
            })

            //方案销售详情
            .state('planSaleDetail', {
                url: '/logging/planSaleDetail',
                templateUrl: 'templates/planSaleDetail.html',
                controller: 'planSaleDetailCtrl'
            })
            //代理点
            .state('dealership', {
                url: '/logging/dealership',
                templateUrl: 'templates/dealership.html',
                controller: 'dealershipCtrl'
            })


            //人员管理
            .state('personnelManage', {
                url: '/logging/personnelManage',
                templateUrl: 'templates/personnelManage.html',
                controller: 'personnelManageCtrl'
            })

            //我的外部团队
            .state('myOutTeam', {
                url: '/logging/myOutTeam',
                templateUrl: 'templates/myOutTeam.html',
                controller: 'myOutTeamCtrl'
            })

            //我的客户经理
            .state('myCustomerManager', {
                url: '/logging/myCustomerManager',
                templateUrl: 'templates/myCustomerManager.html',
                controller: 'myCustomerManagerCtrl'
            })

            //我的外部团队--新增
            .state('myOutTeamAdd', {
                url: '/logging/myOutTeamAdd',
                templateUrl: 'templates/myOutTeamAdd.html',
                controller: 'myOutTeamAddCtrl'
            })

            //我的内部团队
            .state('myInternalTeam', {
                url: '/logging/myInternalTeam',
                templateUrl: 'templates/myInternalTeam.html',
                controller: 'myInternalTeamCtrl'
            })

            //内外机构关联管理--一级目录
            .state('inOutConnect', {
                url: '/logging/inOutConnect',
                templateUrl: 'templates/inOutConnect.html',
                controller: 'inOutConnectCtrl'
            })

            //内外机构关联管理--添加一级
            .state('inOutConnectAdd', {
                url: '/logging/inOutConnectAdd',
                templateUrl: 'templates/inOutConnectAdd.html',
                controller: 'inOutConnectAddCtrl'
            })

            //内外机构关联管理--详细目录
            .state('inOutConnectLevel', {
                url: '/logging/inOutConnectLevel',
                templateUrl: 'templates/inOutConnectLevel.html',
                controller: 'inOutConnectLevelCtrl'
            })

            //内外机构关联管理--详情
            .state('inOutConnectDetail', {
                url: '/logging/inOutConnectDetail',
                templateUrl: 'templates/inOutConnectDetail.html',
                controller: 'inOutConnectDetailCtrl'
            })

            //内外机构关联管理--修改
            .state('inOutConnectDetailChange', {
                url: '/logging/inOutConnectDetailChange',
                templateUrl: 'templates/inOutConnectDetailChange.html',
                controller: 'inOutConnectDetailChangeCtrl'
            })

            //添加下级
            .state('addLower', {
                url: '/logging/addLower',
                templateUrl: 'templates/addLower.html',
                controller: 'addLowerCtrl'
            })

            //外部团队管理
            .state('outTeamManage', {
                url: '/logging/outTeamManage',
                templateUrl: 'templates/outTeamManage.html',
                controller: 'outTeamManageCtrl'
            })

            //外部团队管理--修改
            .state('outTeamManageChange', {
                url: '/logging/outTeamManageChange',
                templateUrl: 'templates/outTeamManageChange.html',
                controller: 'outTeamManageChangeCtrl'
            })

            //外部团队管理--搜索
            .state('outTeamManageSearch', {
                url: '/logging/outTeamManageSearch',
                templateUrl: 'templates/outTeamManageSearch.html',
                controller: 'outTeamManageSearchCtrl'
            })

            //创建团队
            .state('setTeam', {
                url: '/logging/setTeam',
                templateUrl: 'templates/setTeam.html',
                controller: 'setTeamCtrl'
            })

            //客户经理
            .state('customerManager', {
                url: '/logging/customerManager',
                templateUrl: 'templates/customerManager.html',
                controller: 'customerManagerCtrl'
            })

            //客户经理--新建
            .state('customerManagerAdd', {
                url: '/logging/customerManagerAdd',
                templateUrl: 'templates/customerManagerAdd.html',
                controller: 'customerManagerAddCtrl'
            })

            //设置
            .state('settings', {
                url: '/logging/settings',
                templateUrl: 'templates/settings.html',
                controller: 'settingsCtrl'
            })

            //修改密码
            .state('changePassword', {
                url: '/logging/changePassword',
                templateUrl: 'templates/changePassword.html',
                controller: 'changePasswordCtrl'
            })

            //关于
            .state('topic', {
                url: '/logging/topic',
                templateUrl: 'templates/topic.html',
                controller: 'topicCtrl'
            })

            //分享
            .state('share', {
                url: '/logging/share',
                templateUrl: 'templates/share.html',
                controller: 'shareCtrl'
            })

            //initPrd
            .state('initPrd', {
                url: '/logging/initPrd',
                templateUrl: 'templates/initPrd.html',
                controller: 'initPrdCtrl'
            })

            // =========================================================================客户经理版

            //登录
            .state('login', {
                url: '/login',
                templateUrl: 'tem/login.html',
                controller: 'loginCtrl'
            })

            //注册
            .state('registered', {
                url: '/login/registered',
                templateUrl: 'tem/registered.html',
                controller: 'registeredCtrl'
            })

            //首页-客户经理
            .state('homePageM', {
                url: '/login/homePageM',
                templateUrl: 'tem/homePageM.html',
                controller: 'homePageMCtrl'
            })

            //我的商机-list
            .state('myBusinessList', {
                url: '/login/myBusinessList',
                templateUrl: 'tem/myBusinessList.html',
                controller: 'myBusinessListCtrl'
            })

            //未完成商机
            .state('unfinishedBusiness', {
                url: '/login/unfinishedBusiness',
                templateUrl: 'tem/unfinishedBusiness.html',
                controller: 'unfinishedBusinessCtrl'
            })

            //已完成商机
            .state('finishedBusiness', {
                url: '/login/finishedBusiness',
                templateUrl: 'tem/finishedBusiness.html',
                controller: 'finishedBusinessCtrl'
            })

            //新建商机
            .state('newBusiness', {
                url: '/login/newBusiness',
                templateUrl: 'tem/newBusiness.html',
                controller: 'newBusinessCtrl'
            })

            //我的商机
            .state('myBusiness', {
                url: '/login/myBusiness',
                templateUrl: 'tem/myBusiness.html',
                controller: 'myBusinessCtrl'
            })

            //图片上传
            .state('imageUpload', {
                url: '/login/imageUpload',
                templateUrl: 'tem/imageUpload.html',
                controller: 'imageUploadCtrl'
            })

            //任务跟进--客户经理
            .state('missionFollow', {
                url: '/login/missionFollow',
                templateUrl: 'tem/missionFollow.html',
                controller: 'missionFollowCtrl'
            })

            //我的方案
            .state('myPlan', {
                url: '/login/myPlan',
                templateUrl: 'tem/myPlan.html',
                controller: 'myPlanCtrl'
            })

            //我的团队--客户经理
            .state('myteam', {
                url: '/login/myteam',
                templateUrl: 'tem/myteam.html',
                controller: 'myteamCtrl'
            })

            //团队成员
            .state('teamMember', {
                url: '/login/teamMember',
                templateUrl: 'tem/teamMember.html',
                controller: 'teamMemberCtrl'
            })


            // 车险
            .state('carInsurance', {
                url: '/login/carInsurance',
                templateUrl: 'tem/carInsurance.html',
                controller: 'carInsuranceCtrl'
            })

            // 险种
            .state('insuranceType', {
                url: '/login/insuranceType',
                templateUrl: 'tem/insuranceType.html',
                controller: 'insuranceTypeCtrl'
            })

            // 代理点。。。
            .state('searchCode', {
                url: '/login/searchCode',
                templateUrl: 'tem/searchCode.html',
                controller: 'searchCodeCtrl'
            })

            // info
            .state('info', {
                url: '/login/info',
                templateUrl: 'tem/info.html',
                controller: 'infoCtrl'
            })
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    });
