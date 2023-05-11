// カレンダーの日付情報を取得
function getCalendarDate(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    const lastDayOfWeek = lastDay.getDay();
  
    const dates = [];
    let date = 1;
  
    for (let i = 0; i < 6; i++) {
      const week = [];
  
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfWeek) {
          week.push('');
        } else if (date > daysInMonth) {
          week.push('');
        } else {
          week.push(date);
          date++;
        }
      }
  
      dates.push(week);
      if (date > daysInMonth) break;
    }
  
    return dates;
  }
  
  // カレンダーのHTMLを生成
  function generateCalendarHTML(year, month) {
    const dates = getCalendarDate(year, month);
    const headerHTML = `<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>`;
    let bodyHTML = '';
  
    for (let i = 0; i < dates.length; i++) {
      const week = dates[i];
      let weekHTML = '';
  
      for (let j = 0; j < week.length; j++) {
        const date = week[j];
        if (date === '') {
          weekHTML += '<td></td>';
        } else {
          weekHTML += `<td>${date}</td>`;
        }
      }
  
      bodyHTML += `<tr>${weekHTML}</tr>`;
    }
  
    return `<table>${headerHTML}${bodyHTML}</table>`;
  }
  
  // カレンダーを表示
  function displayCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const calendarHTML = generateCalendarHTML(year, month);
    document.getElementById('calendar').innerHTML = calendarHTML;
  }
  
  // ページ読み込み時にカレンダーを表示
  window.onload = displayCalendar;
  
