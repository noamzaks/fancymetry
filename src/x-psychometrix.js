const addNavigationButton = (title, icon, href) => {
    const home = document.querySelector("a[href='https://x.psychometrix.co.il/index-campus.aspx']")
    let inner = home.parentElement.innerHTML
    const index = inner.lastIndexOf("&nbsp;&nbsp;|&nbsp;&nbsp;");
    inner = inner.slice(0, index) + "&nbsp;&nbsp;|&nbsp;&nbsp;" + `<a class="lnk3" href="${href}" data-font-size="16" data-font-size-type="px"><i class="${icon}"></i> ${title}</a>` + inner.slice(index)
    home.parentElement.innerHTML = inner
}

const toDate = (x) => {
    const result = new Date()
    for (let year = 2000; year < 2050; year++) {
        if (x.includes(String(year))) {
            result.setFullYear(year)
        }
    }

    const MONTHS = {
        ינואר: 1,
        פברואר: 2,
        מרץ: 3,
        אפריל: 4,
        מאי: 5,
        יוני: 6,
        יולי: 7,
        אוגוסט: 8,
        ספטמבר: 9,
        אוקטובר: 10,
        נובמבר: 11,
        דצמבר: 12,
        אביב: 4,
        קיץ: 6,
        סתיו: 9,
        חורף: 12,
    }

    for (const month in MONTHS) {
        if (x.includes(month)) {
            result.setMonth(MONTHS[month] - 1)
        }
    }

    return result
}

const valueFor = (row) => {
    const children = Array.from(row.childNodes).filter((cell) => cell.nodeName.toLowerCase() === "td")
    return toDate(children[2].innerHTML)
}

window.onload = () => {
    try {
        if (window.location.href !== "https://x.psychometrix.co.il/pages/loginout/login.aspx") {
            const login = document.querySelector("a[href='https://x.psychometrix.co.il/pages/loginout/login.aspx']")
            if (login) {
                login.click()
            } else {
                addNavigationButton("תוכנית לימוד", "fa fa-map-marker", "https://x.psychometrix.co.il/learning-systems/study-program/")
                addNavigationButton("מילון אונליין", "fa fa-quote-left", "https://x.psychometrix.co.il/learning-systems/words/")
                addNavigationButton("תחקור סימולציות", "fa fa-bar-chart", "https://x.psychometrix.co.il/learning-systems/analysis/analysis-menu.aspx")
                addNavigationButton("ניהול זמנים", "fa fa-asterisk", "https://x.psychometrix.co.il/learning-systems/time-managment/time-managment-menu.aspx")

                if (window.location.href === "https://x.psychometrix.co.il/learning-systems/time-managment/time-managment-menu.aspx" || window.location.href === "https://x.psychometrix.co.il/learning-systems/analysis/analysis-menu.aspx") {
                    const table = document.querySelector("tbody")
                    const rows = Array.from(table.childNodes).filter((row) => row.nodeName.toLowerCase() === "tr" && !row.innerHTML.includes("ממוצע") && !row.innerHTML.includes("דוח תחקור"))

                    const sorted = rows.sort((a, b) => (valueFor(a) > valueFor(b)) ? -1 : 1)

                    for (let i = 0; i + 1 < sorted.length; i++) {
                        Array.from(sorted[i].childNodes).filter((cell) => cell.nodeName.toLowerCase() === "td")[1].innerHTML = sorted.length - i

                        table.insertBefore(sorted[i + 1], sorted[i])
                    }
                    Array.from(sorted[sorted.length - 1].childNodes).filter((cell) => cell.nodeName.toLowerCase() === "td")[1].innerHTML = 1
                }

                if (window.location.href.includes("x.psychometrix.co.il/learning-systems/words")) {
                    const words = Array.from(document.getElementById("spn_words").childNodes).map((word) => {
                        const classes = Array.from(word.classList)
                        return {
                            word: word.querySelector("div.word").textContent,
                            meaning: word.querySelector("div.meaning").textContent,
                            status: classes.includes("status-y") ? 1 : (classes.includes("status-n") ? -1 : (classes.includes("status-m") ? 0 : null))
                        }
                    })
                    console.log(words)
                }

                document.querySelectorAll("a").forEach((a) => a.title = "")
                const instructions = document.querySelector(".chrome-instructions")
                if (instructions) {
                    instructions.parentElement.style.display = "none"
                }
            }
        }
    } catch (_) { }

    document.body.style.opacity = 1
}