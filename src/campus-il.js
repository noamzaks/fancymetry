const font = document.createElement("link")
font.rel = "stylesheet"
font.href = href = "https://fonts.googleapis.com/css?family=Rubik"
document.head.appendChild(font)

window.onload = () => {
    document.body.innerHTML = `
    <div style="display: flex; background-color: #6e6ea7;">
        <div style="margin-right: auto; margin-left: auto;">
            <div id="_ctl0_top_panel" class="row topHead" data-font-size="16" data-font-size-type="px" dir="rtl" style="text-align: center; height: 40px; display: flex; justify-items: center; align-items: center; color: white; font-weight: bold; margin-left: auto; margin-right: auto; padding-right: 15px; padding-left: 15px; width: 100%;">
                <div style="margin: auto;">
                    <a class="lnk3" href="https://x.psychometrix.co.il/index-campus.aspx" data-font-size="16" data-font-size-type="px"><i class="fa fa-home"></i> בית</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="lnk3" href="https://x.psychometrix.co.il/personal" data-font-size="16" data-font-size-type="px"><i class="fa fa-star-o"></i> אזור אישי</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="lnk3" href="https://x.psychometrix.co.il/learning-systems/study-program/" data-font-size="16" data-font-size-type="px"><i class="fa fa-map-marker"></i> תוכנית לימוד</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="lnk3" href="https://x.psychometrix.co.il/learning-systems/words/" data-font-size="16" data-font-size-type="px"><i class="fa fa-quote-left"></i> מילון אונליין</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="lnk3" href="https://x.psychometrix.co.il/learning-systems/analysis/analysis-menu.aspx" data-font-size="16" data-font-size-type="px"><i class="fa fa-bar-chart"></i> תחקור סימולציות</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="lnk3" href="https://x.psychometrix.co.il/learning-systems/time-managment/time-managment-menu.aspx" data-font-size="16" data-font-size-type="px"><i class="fa fa-asterisk"></i> ניהול זמנים</a>
                </div>
            </div>
        </div>
    </div>
    ` + '<img src="https://x.psychometrix.co.il//assets/images/topImage.jpg" class="top-image">' + document.body.innerHTML
    document.body.style.opacity = 1
}