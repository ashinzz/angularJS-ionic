/**
 * Created by zhangjinbao on 2016/11/17.
 */
//通用 comImageBox 点击查看大图
app.directive('comImageBox', ['$state', '$rootScope', function ($state, $rootScope) {
    var comImageBox = {
        restrict: 'E',   //element name <com-my-favor-item></com-my-favor-item>
        templateUrl: '../tem/showBigPic.html',
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

                    $(".LightBox").show(150, function () {
                        $("ion-header-bar").hide();
                        $(".Main .tab-nav").hide();
                        $(".LightBox .ImgViewer img").each(function () {
                            var w = $(this).width();
                            var h = $(this).height();
                            $(this).css({
                                marginLeft: w / 2 * (-1),
                                marginTop: h / 2 * (-1)
                            })
                        });
                    });

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
                    $(".Main .tab-nav").show();
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
                    console.info(mode, touches);
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
                        transform: matrix
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