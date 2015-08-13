// Created by iWeb 3.0.4 local-build-20110804

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.gloryimagesphoto.com/GloryImagesPhoto/News_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.gloryimagesphoto.com/GloryImagesPhoto',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.gloryimagesphoto.com/GloryImagesPhoto',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(2,new IWSize(273,273),new IWSize(273,37),new IWSize(328,325),27,27,0,new IWSize(26,26)),new IWPhotoFrame([IWCreateImage('News_files/Hardcover_bevel_01.png'),IWCreateImage('News_files/Hardcover_bevel_02.png'),IWCreateImage('News_files/Hardcover_bevel_03.png'),IWCreateImage('News_files/Hardcover_bevel_06.png'),IWCreateImage('News_files/Hardcover_bevel_09.png'),IWCreateImage('News_files/Hardcover_bevel_08.png'),IWCreateImage('News_files/Hardcover_bevel_07.png'),IWCreateImage('News_files/Hardcover_bevel_04.png')],null,0,0.750000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,178),url:'News_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'News_files/stroke_1.png'},{rect:new IWRect(2,-2,178,4),url:'News_files/stroke_2.png'},{rect:new IWRect(180,-2,4,4),url:'News_files/stroke_3.png'},{rect:new IWRect(180,2,4,178),url:'News_files/stroke_4.png'},{rect:new IWRect(180,180,4,4),url:'News_files/stroke_5.png'},{rect:new IWRect(2,180,178,4),url:'News_files/stroke_6.png'},{rect:new IWRect(-2,180,4,4),url:'News_files/stroke_7.png'}],new IWSize(182,182))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('News_files/NewsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}
