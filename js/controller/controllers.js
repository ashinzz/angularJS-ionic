angular.module('starter.controllers', ['ngCordova'])
    .factory('dataFac', function () {
        return {
            dataList: {}
        };
    })





    //首页
    .controller('homepageCtrl', ['$scope', '$state', function ($scope, $state) {
        var homepageCtrl = $scope.homepageCtrl = {
            init: function () {

            },
            goMyTask: function () {
                $state.go('myTaskList');
            },
            goMyPerformance: function () {
                $state.go('myPerformance');
            },
            goPlanSale: function () {
                $state.go('planSaleList');
            },
            goMyOpportunity: function () {
                $state.go('myOpportunity');
            },
            goRegister: function () {
                $state.go('register');
            },
            goPersonnelManage: function () {
                $state.go('personnelManage');
            },
            goSettings: function () {
                $state.go('settings');
            }
        }
    }])

    //我的绩效
    .controller('myPerformanceCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myPerformanceCtrl = $scope.myPerformanceCtrl = {
            init: function () {
                myPerformanceCtrl.teamPeople = true;
            },
            people: function () {
                myPerformanceCtrl.teamPeople = true;
            },
            team: function () {
                myPerformanceCtrl.teamPeople = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //我的任务--list
    .controller('myTaskListCtrl', ['$scope', '$state', '$ionicHistory', '$rootScope', function ($scope, $state, $ionicHistory, $rootScope) {
        var myTaskListCtrl = $scope.myTaskListCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goMyTask: function () {
                $state.go('myTask');
            },
            goTaskSearch: function () {
                $rootScope.isShowTaskFollowUp = false;
                $state.go('taskSearch');
            },
            goLogBook: function () {
                $state.go('logBook');
            }
        }
    }])

    //工作日志
    .controller('logBookCtrl', ['$scope', '$state', '$ionicHistory', '$rootScope', function ($scope, $state, $ionicHistory, $rootScope) {
        $('#datepicker').datepicker({
            onSelect: function () {
                logBookCtrl.chooseDate = $("#datepicker").datepicker('getDate');
                console.log(logBookCtrl.chooseDate)
            }
        });
        var logBookCtrl = $scope.logBookCtrl = {
            init: function () {
                // $("#datepicker").datepicker();
                // logBookCtrl.chooseDate = $("#datepicker").datepicker('getDate');

                $('#datepicker').datepicker({altField: '#showDate'});
                var altField = $('#datepicker').datepicker('option', 'altField');
                $('#datepicker').datepicker('option', 'altField', '#showDate');

                // $('#datepicker').datepicker({altFormat: 'yy-mm-dd'});
                // var altFormat = $('#datepicker').datepicker('option', 'altFormat');
                // $('#datepicker').datepicker('option', 'altFormat', 'yy-mm-dd');
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goLogBookDetail: function () {
                $state.go('logBookDetail');
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //工作日志
    .controller('logBookDetailCtrl', ['$scope', '$state', '$ionicHistory', '$rootScope', function ($scope, $state, $ionicHistory, $rootScope) {
        var logBookDetailCtrl = $scope.logBookDetailCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //重新分配
    .controller('redistributionCtrl', ['$scope', '$state', '$ionicHistory', '$rootScope', function ($scope, $state, $ionicHistory, $rootScope) {
        var redistributionCtrl = $scope.redistributionCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //我的任务
    .controller('myTaskCtrl', ['$scope', '$state', '$ionicHistory', '$rootScope', function ($scope, $state, $ionicHistory, $rootScope) {
        // var myTaskCtrl = $scope.myTaskCtrl = {
        //     init: function () {
        //         // myTaskCtrl.isComplete = true;
        //         myTaskCtrl.showCom = 1;
        //         myTaskCtrl.checked = true;
        //     },
        //     //已完成数据
        //     // completed: [
        //     //     {
        //     //         planType: '企财险',
        //     //         planName: '财产综合险',
        //     //         accountName: '李伟',
        //     //         clientManager: '刘经理',
        //     //         isCom: 1
        //     //     },
        //     //     {
        //     //         planType: '责任险',
        //     //         planName: '家庭责任险',
        //     //         accountName: '吴吴',
        //     //         clientManager: '刘经理',
        //     //         isCom: 1
        //     //     },
        //     //     {
        //     //         planType: '责任险',
        //     //         planName: '家庭责任险',
        //     //         accountName: '东东',
        //     //         clientManager: '刘经理',
        //     //         isCom: 1
        //     //     },
        //     //     {
        //     //         planType: '责任险',
        //     //         planName: '家庭责任险',
        //     //         accountName: '东东',
        //     //         clientManager: '刘经理',
        //     //         isCom: 0
        //     //     }
        //     // ],
        //     // completeY: function () {
        //     //     myTaskCtrl.isComplete = true;
        //     //     myTaskCtrl.showCom = 1;
        //     // },
        //     // completeN: function () {
        //     //     myTaskCtrl.isComplete = false;
        //     //     myTaskCtrl.showCom = 0;
        //     // },
        //     goBack: function () {
        //         $ionicHistory.goBack();
        //     },
        //     uncheckedMember: function () {
        //         myTaskCtrl.checked = true;
        //         myTaskCtrl.showCom = 1;
        //     },
        //     checkedMember: function () {
        //         myTaskCtrl.checked = false;
        //         myTaskCtrl.showCom = 0;
        //     },
        // }

        $('.myTask').on('click', function (e) {
            $(this).addClass('active').siblings().removeClass('active');
            var content_id = $.trim($(this).attr('id'));
            if (content_id == "noFinish") {
                $('#div_task_noFinish').show();
                $('#dropdown-menu-noFinish').show();
                $('#div_task_finished').hide();
            } else if (content_id == "finished") {
                $('#div_task_noFinish').hide();
                $('#dropdown-menu-noFinish').hide();
                $('#div_task_finished').show();
            }

        });
        var myTaskCtrl = $scope.myTaskCtrl = {
            init: function () {
                myTaskCtrl.showSubtasks = false;
                myTaskCtrl.taskChooseObj = [
                    {
                        name: 'all',
                        choose: true
                    },
                    {
                        name: 'comprehensive',
                        choose: false
                    },
                    {
                        name: 'remind',
                        choose: false
                    },
                    {
                        name: 'opportunity',
                        choose: false
                    },
                    {
                        name: 'renewal',
                        choose: false
                    }
                ];

                $('#div_task_noFinish').show();
                $('#div_task_finished').hide();
                $scope.noFinishTaskList = [{
                    heading: "拜访交通银行客户经理",
                    title: "拜访客户",
                    status: "未完成",
                    submitTime: "2016-01-18"
                },
                    /*{heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                     {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                     {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                     {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                     {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},*/
                    {heading: "拜访交通银行客户经理", title: "拜访客户", status: "未完成", submitTime: "2016-01-18"}];
                /*$scope.finishedTaskList=[{heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                 {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                 {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                 {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                 {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                 {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"},
                 {heading:"拜访交通银行客户经理",title:"拜访客户",status:"未完成",submitTime:"2016-01-18"}];*/
            },
            addTask: function () {
                $state.go("addTask");
            },
            goTaskDetail: function (item) {
                $rootScope.isShowTaskFollowUp = true;
                $state.go('taskDetail');
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            },

            chooseTask: function (c) {
                angular.forEach(myTaskCtrl.taskChooseObj, function (data) {
                    data.choose = false;
                })
                c.choose = true;
            },
            goTaskSearch: function () {
                $state.go('taskSearch');
            },
            goRedistribution: function () {
                $state.go('redistribution');
            },
            goTaskFollowUp1: function () {
                $state.go('taskFollowUp1');
            },
            isShowSubtasks: function () {
                myTaskCtrl.showSubtasks = !myTaskCtrl.showSubtasks;
            }
        }
    }])

    //任务查询
    .controller('taskSearchCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var taskSearchCtrl = $scope.taskSearchCtrl = {
            init: function () {
                taskSearchCtrl.isShowSearchResult = false;
                taskSearchCtrl.isShowSearchDetail = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            showSearchResult: function () {
                taskSearchCtrl.isShowSearchResult = !taskSearchCtrl.isShowSearchResult;
            },
            showSearchDetail: function () {
                taskSearchCtrl.isShowSearchResult = false;
                taskSearchCtrl.isShowSearchDetail = true;
            },
            goTaskDetail: function () {
                $state.go('taskDetail');
            },
            goRedistribution: function () {
                $state.go('redistribution');
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //新建任务
    .controller('addTaskCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        $('.taskType').on('click', function (e) {
            $(this).siblings().children('span').removeClass("active");
            $(this).children('span').removeClass("active").addClass("active");
        });
        $('.customType').on('click', function (e) {
            $(this).siblings().children('span').removeClass("active");
            $(this).children('span').removeClass("active").addClass("active");
        });
        var addTaskCtrl = $scope.addTaskCtrl = {
            init: function () {

                //$(function () {
                /*var currYear = (new Date()).getFullYear();
                 var opt={};
                 opt.date = {preset : 'date'};
                 opt.datetime = {preset : 'datetime'};
                 opt.time = {preset : 'time'};
                 opt.default = {
                 theme: 'android-ics light', //皮肤样式
                 display: 'modal', //显示方式
                 mode: 'scroller', //日期选择模式
                 dateFormat: 'yyyy-mm-dd',
                 lang: 'zh',
                 showNow: true,
                 nowText: "今天",
                 startYear: currYear - 10, //开始年份
                 endYear: currYear + 10 //结束年份
                 };

                 $("#appDate").mobiscroll($.extend(opt['date'], opt['default']));
                 var optDateTime = $.extend(opt['datetime'], opt['default']);
                 var optTime = $.extend(opt['time'], opt['default']);
                 $("#appDateTime").mobiscroll(optDateTime).datetime(optDateTime);
                 $("#appTime").mobiscroll(optTime).time(optTime);*/
                // });
            },
            //任务跟进
            taskFollowUp: function () {
                $state.go('taskFollowUp');
            },
            //任务轨迹
            taskTrajectory: function () {
                $state.go('taskTrajectory');
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goReceivingTeam: function () {
                $state.go('receivingTeam');
            }
        };
    }])
    //任务详情
    .controller('taskDetailCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var taskDetailCtrl = $scope.taskDetailCtrl = {
            init: function () {

            },
            //任务跟进
            taskFollowUp: function () {
                $state.go('taskFollowUp');
            },
            //任务轨迹
            taskTrajectory: function () {
                $state.go('taskTrajectory');
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            },
            goRecipient: function () {
                $state.go('recipient');
            }
        };
    }])
    //接收团队
    .controller('receivingTeamCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var receivingTeamCtrl = $scope.receivingTeamCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            },
            goRecipient: function () {
                $state.go('recipient');
            }
        };
    }])
    //接收人
    .controller('recipientCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var recipientCtrl = $scope.recipientCtrl = {
            init: function () {
                recipientCtrl.recipient = [
                    {
                        name: '张三',
                        choose: false
                    },
                    {
                        name: '李四',
                        choose: false
                    },
                    {
                        name: '王二',
                        choose: false
                    },
                    {
                        name: '小红',
                        choose: false
                    },
                    {
                        name: '小明',
                        choose: false
                    }
                ];
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            },
            chooseReceivePerson: function (id) {
                id.choose = !id.choose;
            }
        };
    }])

    //任务跟进---new
    .controller('taskFollowUp1Ctrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var taskFollowUp1Ctrl = $scope.taskFollowUp1Ctrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        };
    }])

    //任务跟进
    .controller('taskFollowUpCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        $('.orderType').on('click', function (e) {
            $(this).siblings().children('span').removeClass("active");
            $(this).children('span').removeClass("active").addClass("active");
            var content_id = $.trim($(this).attr('id'));
            if (content_id == "orderVisit") {
                $('#orderEventItem').show();
                $('#followUpDescribe').show();
                $('#orderResultItem').hide();
                $('#visitDescribe').hide();
            } else if (content_id == "orderResult") {
                $('#orderEventItem').hide();
                $('#followUpDescribe').hide();
                $('#orderResultItem').show();
                $('#visitDescribe').show();
            }
        });
        $('.orderEvent').on('click', function (e) {
            $(this).siblings().children('span').removeClass("active");
            $(this).children('span').removeClass("active").addClass("active");
        });
        $('.orderResult').on('click', function (e) {
            $(this).siblings().children('span').removeClass("active");
            $(this).children('span').removeClass("active").addClass("active");
        });
        var taskFollowUpCtrl = $scope.taskFollowUpCtrl = {
            init: function () {
                $('#orderEventItem').show();
                $('#followUpDescribe').show();
                $('#orderResultItem').hide();
                $('#visitDescribe').hide();
            },
            taskFollowUpSubmit: function () {
                $ionicHistory.goBack();
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        };
    }])
    //任务轨迹
    .controller('taskTrajectoryCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var taskTrajectoryCtrl = $scope.taskTrajectoryCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        };
    }])




    //我的商机
    .controller('myOpportunityCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myOpportunityCtrl = $scope.myOpportunityCtrl = {
            init: function () {
                myOpportunityCtrl.showOplist = false;
                document.querySelector('#upLoad').addEventListener('change', function () {

                    function toFixed2(num) {
                        return parseFloat(+num.toFixed(2));
                    }

                    var that = this;
                    if (that.files[0]) {

                        lrz(that.files[0], {
                            width: 71,
                            height: 71
                        })
                            .then(function (rst) {
                                var img = new Image(),
                                    div = document.createElement('div'),
                                    sourceSize = toFixed2(that.files[0].size / 1024),
                                    resultSize = toFixed2(rst.fileLen / 1024),
                                    scale = parseInt(100 - (resultSize / sourceSize * 100));

                                div.appendChild(img);

                                img.onload = function () {
                                    document.querySelector('#addImg').appendChild(div);
                                };

                                img.src = rst.base64;

                                return rst;
                            });
                    }
                });
            },
            showOpportunity: function () {
                myOpportunityCtrl.showOplist = true;
                document.getElementsByClassName('scroll')[2].style.cssText = "transform: translate3d(0px, 0px, 0px) scale(1);";
            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //注册
    .controller('registerCtrl', ['$scope', '$state', function ($scope, $state) {
        var registerCtrl = $scope.registerCtrl = {
            init: function () {

            },
            goHomepage: function () {
                $state.go('homepage');
            }
        }
    }])

    //方案销售
    .controller('planSaleCtrl', ['$scope', '$state', 'dataFac', '$ionicHistory', '$rootScope', function ($scope, $state, dataFac, $ionicHistory, $rootScope) {
        var planSaleCtrl = $scope.planSaleCtrl = {
            init: function () {
                planSaleCtrl.keepShow = true;
                planSaleCtrl.planChooseObj = [
                    {
                        name: 'keep',
                        choose: true
                    },
                    {
                        name: 'unexpected',
                        choose: false
                    },
                    {
                        name: 'freight',
                        choose: false
                    },
                    {
                        name: 'penates',
                        choose: false
                    },
                    {
                        name: 'duty',
                        choose: false
                    },
                    {
                        name: 'agriculture',
                        choose: false
                    },
                    {
                        name: 'car',
                        choose: false
                    },
                    {
                        name: 'banking',
                        choose: false
                    }
                ];
                planSaleCtrl.list = [
                    {
                        name: '个人账户资金损失保障方案',
                        keep: false
                    },
                    {
                        name: '"旅游卫士"黄金版',
                        keep: false
                    },
                    {
                        name: '"旅游卫士"境外钻石版',
                        keep: false
                    },
                    {
                        name: '安全责任方案1888',
                        keep: false
                    },
                    {
                        name: '"旅游卫士"境外钻石版',
                        keep: false
                    }
                ];
            },
            chooseSale: function (c) {
                angular.forEach(planSaleCtrl.planChooseObj, function (data) {
                    data.choose = false;
                })
                c.choose = true;
            },
            keepp: function (id) {
                // planSaleCtrl.keepShow = !planSaleCtrl.keepShow;
                id.keep = !id.keep;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goPlanSaleDetail: function (name) {
                $scope.dataList = {};
                $scope.dataList = dataFac.dataList;
                $scope.dataList.initPrdTitle = name;
                if ($rootScope.isShowPlanSaleDetail) {
                    // $state.go('planSaleDetail');
                    $state.go('planSaleDetail');
                } else {
                    $state.go('initPrd');
                }
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }

        $scope.$watch('planSaleCtrl.searchword', function (newValue, oldValue) {
            // var searchList = [];
            // if (planSaleCtrl.searchword) {
            //     // searchList=planSaleCtrl.list;
            //     // planSaleCtrl.list=[];
            //
            // }
            if (newValue == 'zzz') {
                planSaleCtrl.list = [];
            } else if (newValue == 'aaa') {
                planSaleCtrl.list = [{
                    name: '"旅游卫士"黄金版',
                    keep: false
                }]
            }
        })

    }])

    //我的方案--list
    .controller('planSaleListCtrl', ['$scope', '$state', '$ionicHistory', '$rootScope', function ($scope, $state, $ionicHistory, $rootScope) {
        var planSaleListCtrl = $scope.planSaleListCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goPlanSale: function () {
                $rootScope.isShowPlanSaleDetail = true;
                $state.go('planSale');
            },
            goPlanSaleStr: function () {
                $rootScope.isShowPlanSaleDetail = false;
                $state.go('planSale');
            }
        }
    }])

    //方案销售详情
    .controller('planSaleDetailCtrl', ['$scope', '$state', 'dataFac', '$ionicHistory', function ($scope, $state, dataFac, $ionicHistory) {
        $scope.dataList = {};
        $scope.dataList = dataFac.dataList;
        var planSaleDetailCtrl = $scope.planSaleDetailCtrl = {
            init: function () {
                $scope.dealershipShow = false;
                $scope.benefitFinInstShow = false;
            },
            changeIndustryMode: function () {
                var industryMode = $('#industryMode').val();
                if (industryMode == "银行代理") {
                    $scope.dealershipShow = true;
                    $scope.benefitFinInstShow = true;
                } else if (industryMode == "普通专业代理(不含车商)" || industryMode == "个人营销" || industryMode == "普通经纪(不含车商)") {
                    $scope.dealershipShow = true;
                    $scope.benefitFinInstShow = false;
                } else if (industryMode == "公司直营店" || industryMode == "直拓") {
                    $scope.dealershipShow = false;
                    $scope.benefitFinInstShow = false;
                }
            },
            dealershipSearch: function () {

                $state.go('dealership');
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goInitPrd: function () {
                $state.go('initPrd');
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        };
    }])
    //代理点
    .controller('dealershipCtrl', ['$scope', '$state', 'dataFac', '$ionicHistory', function ($scope, $state, dataFac, $ionicHistory) {
        $scope.dataList = {};
        $scope.dataList = dataFac.dataList;
        $('.companyName').on('click', function (e) {
            $($($(this).children()[0]).find('span')[0]).attr("class", "").addClass("active");
            for (var i = 0; i < $(this).siblings().length; i++) {
                $($($(this).siblings()[i]).find('span')[0]).attr("class", "").removeClass("active");
            }
        });
        var dealershipCtrl = $scope.dealershipCtrl = {
            init: function () {
                if ($scope.dataList.dealership != null && $scope.dataList.dealership != undefined) {
                    for (var i = 0; i < $('.companyTxt').length; i++) {
                        if ($($('.companyTxt')[i]).text() == $scope.dataList.dealership) {
                            $($($('.companyTxt')[i]).siblings().find('span')[0]).attr("class", "").addClass("active");
                        }
                    }
                }
            },
            goPlanSaleDetail: function () {
                $scope.dataList.dealership = $('span.active').parent().siblings().text();
                $ionicHistory.goBack();
            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        };
    }])


    //人员管理
    .controller('personnelManageCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var personnelManageCtrl = $scope.personnelManageCtrl = {
            init: function () {

            },
            goInOutConnect: function () {
                $state.go('inOutConnect');
            },
            goOutTeamManage: function () {
                $state.go('outTeamManage');
            },
            goCustomerManager: function () {
                $state.go('customerManager')
            },
            goBack: function () {
                $ionicHistory.goBack();
            },

            goMyOutTeam: function () {
                $state.go('myOutTeam');
            },
            goMyInternalTeam: function () {
                $state.go('myInternalTeam');
            }
        }
    }])

    //我的外部团队
    .controller('myOutTeamCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myOutTeamCtrl = $scope.myOutTeamCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goMyCustomerManager: function () {
                $state.go('myCustomerManager');
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //我的客户经理
    .controller('myCustomerManagerCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myCustomerManagerCtrl = $scope.myCustomerManagerCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goMyOutTeamAdd: function () {
                $state.go('myOutTeamAdd');
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //我的外部团队--新增
    .controller('myOutTeamAddCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myOutTeamAddCtrl = $scope.myOutTeamAddCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //我的内部团队
    .controller('myInternalTeamCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myInternalTeamCtrl = $scope.myInternalTeamCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //内外机构关联管理--一级目录
    .controller('inOutConnectCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var inOutConnectCtrl = $scope.inOutConnectCtrl = {
            init: function () {
                // inOutConnectCtrl.isShowDetail = true;
                // inOutConnectCtrl.isShowMore = false;
                // inOutConnectCtrl.isShowNext = false;
                // inOutConnectCtrl.isAddIcon = true;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goInOutConnectLevel: function () {
                $state.go('inOutConnectLevel');
            },
            goInOutConnectAdd: function () {
                $state.go('inOutConnectAdd');
            }
            // goAddLower: function () {
            //     $state.go('addLower');
            // },
            // showDetail: function () {
            //     inOutConnectCtrl.isShowDetail = false;
            // },
            // moreBtn: function () {
            //     inOutConnectCtrl.isShowMore = !inOutConnectCtrl.isShowMore;
            // },
            // showNext: function () {
            //     inOutConnectCtrl.isShowNext = !inOutConnectCtrl.isShowNext;
            //     inOutConnectCtrl.isAddIcon = !inOutConnectCtrl.isAddIcon;
            // }
        }
    }])

    //内外机构关联管理--添加一级
    .controller('inOutConnectAddCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        var inOutConnectAddCtrl = $scope.inOutConnectAddCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //内外机构关联管理--详细目录
    .controller('inOutConnectLevelCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var inOutConnectLevelCtrl = $scope.inOutConnectLevelCtrl = {
            init: function () {
                inOutConnectLevelCtrl.isAddIcon = true;
                inOutConnectLevelCtrl.isShowNext2 = false;
                inOutConnectLevelCtrl.isAddIcon2 = true;
                inOutConnectLevelCtrl.isShowNext3 = false;
                inOutConnectLevelCtrl.isAddIcon3 = true;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            showNext: function () {
                inOutConnectLevelCtrl.isAddIcon = !inOutConnectLevelCtrl.isAddIcon;
                inOutConnectLevelCtrl.isShowNext2 = !inOutConnectLevelCtrl.isShowNext2;
                if (!inOutConnectLevelCtrl.isShowNext2) {
                    inOutConnectLevelCtrl.isAddIcon2 = true;
                    inOutConnectLevelCtrl.isShowNext3 = false;
                    inOutConnectLevelCtrl.isAddIcon3 = true;
                }
            },
            showNext2: function () {
                inOutConnectLevelCtrl.isAddIcon2 = !inOutConnectLevelCtrl.isAddIcon2;
                inOutConnectLevelCtrl.isShowNext3 = !inOutConnectLevelCtrl.isShowNext3;
            },
            showNext3: function () {
                inOutConnectLevelCtrl.isAddIcon3 = !inOutConnectLevelCtrl.isAddIcon3;
            },
            goInOutConnectDetail: function () {
                $state.go('inOutConnectDetail');
            }
        }
    }])

    //内外机构关联管理--详情
    .controller('inOutConnectDetailCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var inOutConnectDetailCtrl = $scope.inOutConnectDetailCtrl = {
            init: function () {
                inOutConnectDetailCtrl.isShowMore = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            moreBtn: function () {
                inOutConnectDetailCtrl.isShowMore = !inOutConnectDetailCtrl.isShowMore;
            },
            goAddLower: function () {
                $state.go('addLower');
            },
            goInOutConnectDetailChange: function () {
                $state.go('inOutConnectDetailChange');
            }
        }
    }])

    //内外机构关联管理--修改
    .controller('inOutConnectDetailChangeCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var inOutConnectDetailChangeCtrl = $scope.inOutConnectDetailChangeCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //添加下级
    .controller('addLowerCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var addLowerCtrl = $scope.addLowerCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //外部团队管理
    .controller('outTeamManageCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var outTeamManageCtrl = $scope.outTeamManageCtrl = {
            init: function () {
                outTeamManageCtrl.isShowSearchCriteria = true;
                outTeamManageCtrl.isShowSearchResult = false;
                outTeamManageCtrl.isShowResultDetail = false;
                outTeamManageCtrl.isShowMore = false;
                outTeamManageCtrl.checked = true;
                outTeamManageCtrl.isShowTeamManage = false;
                outTeamManageCtrl.isShowSearchCondition = false;
                outTeamManageCtrl.isShowCreatTeamBtn = true;
                outTeamManageCtrl.isShowFootBtn = true;
                outTeamManageCtrl.isShowTwoSearch = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            showSearchResult: function () {
                // outTeamManageCtrl.isShowSearchCriteria = false;
                outTeamManageCtrl.isShowSearchResult = true;
            },
            showResultDetail: function () {
                outTeamManageCtrl.isShowSearchResult = false;
                outTeamManageCtrl.isShowResultDetail = true;
                outTeamManageCtrl.isShowSearchCondition = false;
                outTeamManageCtrl.isShowCreatTeamBtn = false;
            },
            moreBtn: function () {
                outTeamManageCtrl.isShowMore = !outTeamManageCtrl.isShowMore;
            },
            goSetTeam: function () {
                $state.go('setTeam');
            },
            uncheckedMember: function () {
                outTeamManageCtrl.checked = true;
                outTeamManageCtrl.isShowTwoSearch = true;
            },
            checkedMember: function () {
                outTeamManageCtrl.checked = false;
                outTeamManageCtrl.isShowTwoSearch = false;
            },
            showTeamManage: function () {
                outTeamManageCtrl.isShowResultDetail = false;
                outTeamManageCtrl.isShowTeamManage = true;
                outTeamManageCtrl.isShowFootBtn = false;
                outTeamManageCtrl.isShowTwoSearch = true;
            },
            showHideSearch: function () {
                outTeamManageCtrl.isShowSearchCondition = !outTeamManageCtrl.isShowSearchCondition;
            },
            showHideSearch2: function () {
                $state.go('outTeamManageSearch');
            },
            goOutManageChange: function () {
                $state.go('outTeamManageChange');
            }
        }
    }])

    //外部团队管理--修改
    .controller('outTeamManageChangeCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var outTeamManageChangeCtrl = $scope.outTeamManageChangeCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //外部团队管理--搜索
    .controller('outTeamManageSearchCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var outTeamManageSearchCtrl = $scope.outTeamManageSearchCtrl = {
            init: function () {
                outTeamManageSearchCtrl.isShowSearch = true;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            showSearch: function () {
                outTeamManageSearchCtrl.isShowSearch = !outTeamManageSearchCtrl.isShowSearch;
            }
        }
    }])

    //创建团队
    .controller('setTeamCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var setTeamCtrl = $scope.setTeamCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //客户经理
    .controller('customerManagerCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var customerManagerCtrl = $scope.customerManagerCtrl = {
            init: function () {
                customerManagerCtrl.isShowSearchCondition = false;
                customerManagerCtrl.isShowSearchResult = false;
                customerManagerCtrl.isShowSearchDetail = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            showSearchCondition: function () {
                customerManagerCtrl.isShowSearchCondition = !customerManagerCtrl.isShowSearchCondition;
            },
            showSearchResult: function () {
                customerManagerCtrl.isShowSearchResult = true;
            },
            showSearchDetail: function () {
                customerManagerCtrl.isShowSearchResult = false;
                customerManagerCtrl.isShowSearchDetail = true;
            },
            addNew: function () {
                $state.go('customerManagerAdd')
            },
            startUsing: function () {
                customerManagerCtrl.isShowSearchResult = true;
                customerManagerCtrl.isShowSearchDetail = false;
            }
        }
    }])

    //客户经理--新建
    .controller('customerManagerAddCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var customerManagerAddCtrl = $scope.customerManagerAddCtrl = {
            init: function () {
            },
            goBack: function () {
                $ionicHistory.goBack();
            }
        }
    }])

    //设置
    .controller('settingsCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var settingsCtrl = $scope.settingsCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goChangePassword: function () {
                $state.go('changePassword');
            },
            goTopic: function () {
                $state.go('topic');
            },
            goShare: function () {
                $state.go('share');
            },
            goIndex: function () {
                $state.go('login');
            }
        }
    }])

    //修改密码
    .controller('changePasswordCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var changePasswordCtrl = $scope.changePasswordCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //关于
    .controller('topicCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var topicCtrl = $scope.topicCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //分享
    .controller('shareCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var shareCtrl = $scope.shareCtrl = {
            init: function () {
                shareCtrl.url = "img/share.png";
                console.log(shareCtrl.url);
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //initPrd
    .controller('initPrdCtrl', ['$scope', '$state', 'dataFac', '$ionicHistory', function ($scope, $state, dataFac, $ionicHistory) {
        var initPrdCtrl = $scope.initPrdCtrl = {
            init: function () {
                // $scope.dataList = dataFac.dataList;
                // $scope.initPrdTitle = $scope.dataList.initPrdTitle;
                initPrdCtrl.initPrdTitle = dataFac.dataList.initPrdTitle;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homepage');
            }
        }
    }])

    //登录
    .controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {
        var loginCtrl = $scope.loginCtrl = {
            init: function () {
                var arrS = document.cookie.match(new RegExp("(^| )" + 'salesman' + "=([^;]*)(;|$)"));
                var arrM = document.cookie.match(new RegExp("(^| )" + 'manager' + "=([^;]*)(;|$)"));
                // if(arr != null) return unescape(arr[2]); return null;
                if (arrS != null && unescape(arrS[2])) {
                    loginCtrl.isShowChooseDiv = false;
                    loginCtrl.showSalesman = true;
                } else if (arrM != null && unescape(arrM[2])) {
                    loginCtrl.isShowChooseDiv = false;
                    loginCtrl.showSalesman = false;
                } else {
                    loginCtrl.isShowChooseDiv = true;
                }
                // loginCtrl.showSalesman = true;
                loginCtrl.getPass = true;
                loginCtrl.isChooseSalesman = true;
                // loginCtrl.isShowChooseDiv = true;
            },
            chooseSalesman: function () {
                loginCtrl.showSalesman = true;
            },
            chooseCustomerManager: function () {
                loginCtrl.showSalesman = false;
            },
            getPassword: function () {
                loginCtrl.getPass = !loginCtrl.getPass;
            },
            goRegistered: function () {
                $state.go('registered');
            },
            goHomePageM: function () {
                if (loginCtrl.showSalesman) {
                    var Days = 30; //此 cookie 将被保存 30 天
                    var exp = new Date();    //new Date("December 31, 9998");
                    exp.setTime(exp.getTime() + 60 * 1000);
                    // exp.setTime(exp.getTime() + Days*24*60*60*1000);
                    document.cookie = 'salesman' + "=" + escape(true) + ";expires=" + exp.toGMTString();
                    $state.go('homepage');
                } else {
                    var Days = 30; //此 cookie 将被保存 30 天
                    var exp = new Date();    //new Date("December 31, 9998");
                    exp.setTime(exp.getTime() + 60 * 1000);
                    // exp.setTime(exp.getTime() + Days*24*60*60*1000);
                    document.cookie = 'manager' + "=" + escape(true) + ";expires=" + exp.toGMTString();
                    $state.go('homePageM');
                }
            },
            chooseSalesman: function () {
                loginCtrl.isChooseSalesman = true;
            },
            chooseManager: function () {
                loginCtrl.isChooseSalesman = false;
            },
            showLogDiv: function () {
                loginCtrl.isShowChooseDiv = false;
                if (loginCtrl.isChooseSalesman) {
                    loginCtrl.showSalesman = true;
                } else {
                    loginCtrl.showSalesman = false;
                }
            }
        }
    }])

    //注册
    .controller('registeredCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var registeredCtrl = $scope.registeredCtrl = {
            init: function () {
                registeredCtrl.showInstitutions2 = false;
                registeredCtrl.showInstitutions3 = false;
                registeredCtrl.showInstitutions4 = false;
                registeredCtrl.institutions = [
                    {
                        name: '北京',
                        cityList: [{
                            name: '市辖区',
                            areaList: ['东城区', '西城区', '崇文区', '宣武区', '朝阳区', '丰台区', '石景山区', '海淀区', '门头沟区', '房山区', '通州区', '顺义区', '昌平区', '大兴区', '怀柔区', '平谷区']
                        }, {
                            name: '县',
                            areaList: ['密云县', '延庆县']
                        }]
                    }, {
                        name: '上海',
                        cityList: [{
                            name: '市辖区',
                            areaList: ['黄浦区', '卢湾区', '徐汇区', '长宁区', '静安区', '普陀区', '闸北区', '虹口区', '杨浦区', '闵行区', '宝山区', '嘉定区', '浦东新区', '金山区', '松江区', '青浦区', '南汇区', '奉贤区']
                        }, {
                            name: '县',
                            areaList: ['崇明县']
                        }]
                    }, {
                        name: '天津',
                        cityList: [{
                            name: '市辖区',
                            areaList: ['和平区', '河东区', '河西区', '南开区', '河北区', '红桥区', '塘沽区', '汉沽区', '大港区', '东丽区', '西青区', '津南区', '北辰区', '武清区', '宝坻区']
                        }, {
                            name: '县',
                            areaList: ['宁河县', '静海县', '蓟　县']
                        }]
                    }, {
                        name: '重庆',
                        cityList: [{
                            name: '市辖区',
                            areaList: ['万州区', '涪陵区', '渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区', '北碚区', '万盛区', '双桥区', '渝北区', '巴南区', '黔江区', '长寿区']
                        }, {
                            name: '县',
                            areaList: ['綦江县', '潼南县', '铜梁县', '大足县', '荣昌县', '璧山县', '梁平县', '城口县', '丰都县', '垫江县', '武隆县', '忠　县', '开　县', '云阳县', '奉节县', '巫山县', '巫溪县', '石柱土家族自治县', '秀山土家族苗族自治县', '酉阳土家族苗族自治县', '彭水苗族土家族自治县']
                        }, {
                            name: '市',
                            areaList: ['江津市', '合川市', '永川市', '南川市']
                        }]
                    }
                ];
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            select: function () {
                registeredCtrl.institutions2 = registeredCtrl.pro.cityList;
                registeredCtrl.showInstitutions2 = true;
            },
            select2: function () {
                registeredCtrl.institutions3 = registeredCtrl.city.areaList;
                registeredCtrl.showInstitutions3 = true;
            },
            select3: function () {
                registeredCtrl.showInstitutions4 = true;
            }
        }
    }])

    //首页-客户经理
    .controller('homePageMCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
        var homePageMCtrl = $scope.homePageMCtrl = {
            init: function () {

            },
            goMyBusinessList: function () {
                $state.go('myBusinessList');
            },
            goSettings: function () {
                $state.go('settings');
            },
            goMyteam: function () {
                $state.go('myteam');
            },
            goUnfinishedBusiness: function () {
                $state.go('unfinishedBusiness');
                // $rootScope.finishedB = false;
            },
            goFinishedBusiness: function () {
                $state.go('finishedBusiness');
                // $rootScope.finishedB = true;
            },
            goMyPlan: function () {
                $state.go('myPlan');
            },
            goMyPerformance: function () {
                $state.go('carInsurance');
            },
            goInfo: function () {
                $state.go('info');
            }
        }
    }])

    //我的方案
    .controller('myPlanCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myPlanCtrl = $scope.myPlanCtrl = {
            init: function () {
                myPlanCtrl.keepShow = true;
                myPlanCtrl.planChooseObj = [
                    {
                        name: 'keep',
                        choose: true
                    },
                    {
                        name: 'easy',
                        choose: false
                    },
                    {
                        name: 'guard',
                        choose: false
                    },
                    {
                        name: 'guardian',
                        choose: false
                    }
                ];
                myPlanCtrl.list = [
                    {
                        name: '个人账户资金损失保障方案',
                        keep: false
                    },
                    {
                        name: '"旅游卫士"黄金版',
                        keep: false
                    },
                    {
                        name: '"旅游卫士"境外钻石版',
                        keep: false
                    },
                    {
                        name: '安全责任方案1888',
                        keep: false
                    },
                    {
                        name: '"旅游卫士"境外钻石版',
                        keep: false
                    }
                ];
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            chooseSale: function (c) {
                angular.forEach(myPlanCtrl.planChooseObj, function (data) {
                    data.choose = false;
                });
                c.choose = true;
            },
            keepp: function (id) {
                // planSaleCtrl.keepShow = !planSaleCtrl.keepShow;
                id.keep = !id.keep;
            }
        }
    }])

    //我的团队--客户经理
    .controller('myteamCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myteamCtrl = $scope.myteamCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goTeamMember: function () {
                $state.go('teamMember');
            }
        }
    }])

    //我的团队
    .controller('teamMemberCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var teamMemberCtrl = $scope.teamMemberCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            }
        }
    }])

    //我的商机-list
    .controller('myBusinessListCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myBusinessListCtrl = $scope.myBusinessListCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goUnfinishedBusiness: function () {
                $state.go('unfinishedBusiness');
            },
            goFinishedBusiness: function () {
                $state.go('finishedBusiness');
            },
            goNewBusiness: function () {
                $state.go('newBusiness');
            }
        }
    }])

    //未完成商机
    .controller('unfinishedBusinessCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var unfinishedBusinessCtrl = $scope.unfinishedBusinessCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            goMyBusiness: function () {
                $state.go('myBusiness');
            },
            goNewBusiness: function () {
                $state.go('newBusiness');
            }
        }
    }])

    //已完成商机
    .controller('finishedBusinessCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var finishedBusinessCtrl = $scope.finishedBusinessCtrl = {
            init: function () {
                finishedBusinessCtrl.isShowSearchResult = false;
                finishedBusinessCtrl.isShowSearchDetail = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            showSearchResult: function () {
                finishedBusinessCtrl.isShowSearchResult = !finishedBusinessCtrl.isShowSearchResult;
            },
            showSearchDetail: function () {
                finishedBusinessCtrl.isShowSearchDetail = true;
                finishedBusinessCtrl.isShowSearchResult = false;
            },
            goMyBusiness: function () {
                $state.go('myBusiness');
            }
        }
    }])

    //我的商机
    .controller('myBusinessCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var myBusinessCtrl = $scope.myBusinessCtrl = {
            init: function () {
                myBusinessCtrl.planUnChoosed = true;
                myBusinessCtrl.choosePlanTeam = [
                    {
                        id: 'property',
                        name: '财产险',
                        choose: false
                    },
                    {
                        id: 'responsibility',
                        name: '责任险',
                        choose: false
                    },
                    {
                        id: 'ship',
                        name: '船舶险',
                        choose: false
                    },
                    {
                        id: 'freight',
                        name: '货运险',
                        choose: true
                    },
                    {
                        id: 'engineering',
                        name: '工程险',
                        choose: false
                    },
                    {
                        id: 'creditGuarantee',
                        name: '信用保证保险',
                        choose: false
                    },
                    {
                        id: 'special',
                        name: '特险',
                        choose: false
                    },
                    {
                        id: 'agricultural',
                        name: '农业险',
                        choose: false
                    },
                    {
                        id: 'car',
                        name: '车险',
                        choose: false
                    }
                ];
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            goImageUpload: function () {
                $state.go('imageUpload');
            },
            goMissionFollow: function () {
                $state.go('missionFollow');
            }
        }
    }])

    //任务跟进--客户经理
    .controller('missionFollowCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var missionFollowCtrl = $scope.missionFollowCtrl = {
            init: function () {
                missionFollowCtrl.showInformation = true;
                missionFollowCtrl.showVisit = false;
                missionFollowCtrl.showResults = false;
                missionFollowCtrl.showInfoIncomplete = false;
                missionFollowCtrl.showPicNoclear = false;
                missionFollowCtrl.showInfoNocorrect = false;
                missionFollowCtrl.showAppointment = false;
                missionFollowCtrl.showToDoor = false;
                missionFollowCtrl.showRefusedVisit = false;
                missionFollowCtrl.showSuccessVisit = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            information: function () {
                missionFollowCtrl.showInformation = true;
                missionFollowCtrl.showVisit = false;
                missionFollowCtrl.showResults = false;
            },
            visit: function () {
                missionFollowCtrl.showVisit = true;
                missionFollowCtrl.showInformation = false;
                missionFollowCtrl.showResults = false;
            },
            results: function () {
                missionFollowCtrl.showResults = true;
                missionFollowCtrl.showInformation = false;
                missionFollowCtrl.showVisit = false;
            },
            infoIncomplete: function () {
                missionFollowCtrl.showInfoIncomplete = !missionFollowCtrl.showInfoIncomplete;
                // missionFollowCtrl.showPicNoclear = false;
            },
            picNoclear: function () {
                missionFollowCtrl.showPicNoclear = !missionFollowCtrl.showPicNoclear;
                // missionFollowCtrl.showInfoIncomplete = false;
            },
            infoNocorrect: function () {
                missionFollowCtrl.showInfoNocorrect = !missionFollowCtrl.showInfoNocorrect;
            },
            appointment: function () {
                missionFollowCtrl.showAppointment = true;
                missionFollowCtrl.showToDoor = false;
            },
            toDoor: function () {
                missionFollowCtrl.showToDoor = true;
                missionFollowCtrl.showAppointment = false;
            },
            refusedVisit: function () {
                missionFollowCtrl.showRefusedVisit = true;
                missionFollowCtrl.showSuccessVisit = false;
            },
            successVisit: function () {
                missionFollowCtrl.showSuccessVisit = true;
                missionFollowCtrl.showRefusedVisit = false;
            }
        }
    }])

    //新建商机
    .controller('newBusinessCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var newBusinessCtrl = $scope.newBusinessCtrl = {
            init: function () {
                newBusinessCtrl.planUnChoosed = true;
                // newBusinessCtrl.choosePlan = [
                //     {
                //         name: 'easy',
                //         choose: false
                //     }, {
                //         name: 'guard',
                //         choose: false
                //     }, {
                //         name: 'guardian',
                //         choose: false
                //     }
                // ];
                newBusinessCtrl.choosePlanTeam = [
                    {
                        id: 'property',
                        name: '财产险',
                        choose: false
                    },
                    {
                        id: 'responsibility',
                        name: '责任险',
                        choose: false
                    },
                    {
                        id: 'ship',
                        name: '船舶险',
                        choose: false
                    },
                    {
                        id: 'freight',
                        name: '货运险',
                        choose: false
                    },
                    {
                        id: 'engineering',
                        name: '工程险',
                        choose: false
                    },
                    {
                        id: 'creditGuarantee',
                        name: '信用保证保险',
                        choose: false
                    },
                    {
                        id: 'special',
                        name: '特险',
                        choose: false
                    },
                    {
                        id: 'agricultural',
                        name: '农业险',
                        choose: false
                    },
                    {
                        id: 'car',
                        name: '车险',
                        choose: false
                    }
                ];

                newBusinessCtrl.choosePlanPerson = [
                    {
                        id: 'casualty',
                        name: '意外险',
                        choose: false
                    },
                    {
                        id: 'rich',
                        name: '家财险',
                        choose: false
                    },
                    {
                        id: 'responsibility',
                        name: '责任险',
                        choose: false
                    },
                    {
                        id: 'mortgage',
                        name: '个人抵押房屋综合保险',
                        choose: false
                    },
                    {
                        id: 'creditGuarantee',
                        name: '信用保证保险',
                        choose: false
                    },
                    {
                        id: 'car',
                        name: '车险',
                        choose: false
                    }
                ];

                newBusinessCtrl.teamN = true;
                newBusinessCtrl.personN = false;
                newBusinessCtrl.sexM = true;


                newBusinessCtrl.sel = [
                    {
                        name: '1111',
                        code: 1
                    },
                    {
                        name: '2222',
                        code: 2
                    },
                    {
                        name: '3333',
                        code: 3
                    }
                ];
                newBusinessCtrl.select = newBusinessCtrl.sel[2];
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            goImageUpload: function () {
                $state.go('imageUpload');
            },
            chooseT: function (id) {
                angular.forEach(newBusinessCtrl.choosePlanTeam, function (data) {
                    data.choose = false;
                });
                id.choose = true;
            },
            chooseP: function (id) {
                angular.forEach(newBusinessCtrl.choosePlanPerson, function (data) {
                    data.choose = false;
                });
                id.choose = true;
            },
            chooseTypeT: function () {
                newBusinessCtrl.teamN = true;
                newBusinessCtrl.personN = false;
            },
            chooseTypeP: function () {
                newBusinessCtrl.teamN = false;
                newBusinessCtrl.personN = true;
            },
            chooseSexM: function () {
                newBusinessCtrl.sexM = true;
            },
            chooseSexW: function () {
                newBusinessCtrl.sexM = false;
            }
        }
    }])

    //图片上传
    .controller('imageUploadCtrl', ['$scope', '$state', '$ionicHistory', '$ionicNavBarDelegate', function ($scope, $state, $ionicHistory, $ionicNavBarDelegate) {
        var imageUploadCtrl = $scope.imageUploadCtrl = {
            init: function () {
                imageUploadCtrl.isShowBigImg = false;
                document.querySelector('#upLoad').addEventListener('change', function () {

                    function toFixed2(num) {
                        return parseFloat(+num.toFixed(2));
                    }

                    var that = this;

                        lrz(that.files[0], {
                            width: 76,
                            height: 76
                        })
                            .then(function (rst) {
                                var img = new Image(),
                                    div = document.createElement('div'),
                                    sourceSize = toFixed2(that.files[0].size / 1024),
                                    resultSize = toFixed2(rst.fileLen / 1024),
                                    scale = parseInt(100 - (resultSize / sourceSize * 100));

                                div.appendChild(img);

                                img.onload = function () {
                                    document.querySelector('#addImg').appendChild(div);
                                };

                                img.src = rst.base64;

                                return rst;
                            });
                });

                $(function () {
                    $('div.pinch-zoom').each(function () {
                        new RTP.PinchZoom($(this), {});
                    });
                });
            },
            showBigPic: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            showBigImg: function () {
                $ionicNavBarDelegate.showBar(false);
                imageUploadCtrl.isShowBigImg = true;
            },
            showSmallImg: function () {
                $ionicNavBarDelegate.showBar(true);
                imageUploadCtrl.isShowBigImg = false;
            }
        }
    }])

    //车险
    .controller('carInsuranceCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var carInsuranceCtrl = $scope.carInsuranceCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            goImageUpload: function () {
                $state.go('imageUpload');
            },
            goSearchCode: function () {
                $state.go('searchCode');
            },
            goInsuranceType: function () {
                $state.go('insuranceType');
            },
            showInsuranceTypeModel: function () {

            }
        }
        // $ionicModal.fromTemplateUrl('modal.html', {
        //     scope: $scope,
        //     animation: 'slide-in-up'
        // }).then(function(modal) {
        //     $scope.modal = modal;
        // });
    }])

    //险种
    .controller('insuranceTypeCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var insuranceTypeCtrl = $scope.insuranceTypeCtrl = {
            init: function () {
                insuranceTypeCtrl.insuranceType = [
                    {
                        name: '特种车商业保险条款',
                        choose: false
                    },
                    {
                        name: '特种车商业保险条款',
                        choose: false
                    },
                    {
                        name: '特种车商业保险条款',
                        choose: false
                    },
                    {
                        name: '特种车商业保险条款',
                        choose: false
                    },
                    {
                        name: '特种车商业保险条款',
                        choose: false
                    },
                    {
                        name: '特种车商业保险条款',
                        choose: false
                    },
                    {
                        name: '特种车商业保险条款',
                        choose: false
                    }
                ];
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            chooseType: function (id) {
                id.choose = !id.choose;
            }
        }
    }])

    //代理点。。。
    .controller('searchCodeCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var searchCodeCtrl = $scope.searchCodeCtrl = {
            init: function () {

            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            },
            dealershipSearch: function () {
                $state.go('dealership');
            }
        }
    }])

    //info
    .controller('infoCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        var infoCtrl = $scope.infoCtrl = {
            init: function () {
                infoCtrl.invite = true;
                infoCtrl.send = false;
            },
            goBack: function () {
                $ionicHistory.goBack();
            },
            goHomePage: function () {
                $state.go('homePageM');
            }
        }
    }])

;