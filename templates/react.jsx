import React from 'react';

const MyComponent = () => {
    const htmlContent = '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
        '    <title>Havelsan Yemekhane App</title>\n' +
        '    <link rel="stylesheet" type="text/css" href="styles.css">\n' +
        '    <meta charset="UTF-8">\n' +
        '    <style>\n' +
        '        body {\n' +
        '            transition: background-color 0.5s ease;\n' +
        '            margin: 0;\n' +
        '            padding: 0;\n' +
        '            font-family: Arial, sans-serif;\n' +
        '            background-color: #f5f5f5;\n' +
        '            --background-color: #4b95c9;\n' +
        '            --text-color: #333;\n' +
        '        }\n' +
        '\n' +
        '\n' +
        '        .circular-progress {\n' +
        '            position: relative;\n' +
        '            height: 250px;\n' +
        '            width: 250px;\n' +
        '            border-radius: 50%;\n' +
        '            background: conic-gradient(#7d2ae8 3.6deg, #ededed 0deg);\n' +
        '            display: flex;\n' +
        '            align-items: center;\n' +
        '            justify-content: center;\n' +
        '        }\n' +
        '\n' +
        '        .circular-progress::before {\n' +
        '            content: "";\n' +
        '            position: absolute;\n' +
        '            height: 210px;\n' +
        '            width: 210px;\n' +
        '            border-radius: 50%;\n' +
        '            background-color: #fff;\n' +
        '        }\n' +
        '\n' +
        '        .progress-value {\n' +
        '            position: relative;\n' +
        '            font-size: 40px;\n' +
        '            font-weight: 600;\n' +
        '            color: #7d2ae8;\n' +
        '        }\n' +
        '\n' +
        '        .text {\n' +
        '            font-size: 30px;\n' +
        '            font-weight: 500;\n' +
        '            color: #606060;\n' +
        '        }\n' +
        '\n' +
        '        .Top-Bar {\n' +
        '            width: 100%;\n' +
        '            height: 10vh;\n' +
        '            top: 0;\n' +
        '            background-color: #ffff;\n' +
        '            display: flex;\n' +
        '            justify-content: center;\n' +
        '            align-items: center;\n' +
        '        }\n' +
        '\n' +
        '        .centered-image {\n' +
        '            width: 10vw;\n' +
        '            height: 8vh;\n' +
        '        }\n' +
        '\n' +
        '\n' +
        '        .container {\n' +
        '            padding: 10px;\n' +
        '            margin: 50px auto;\n' +
        '            max-width: 500px;\n' +
        '            max-height: 600px;\n' +
        '            background-color: var(--background-color);\n' +
        '            min-width: 500px;\n' +
        '\n' +
        '            color: var(--text-color);\n' +
        '            border-radius: 10px;\n' +
        '            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n' +
        '        }\n' +
        '\n' +
        '        .dateContainer {\n' +
        '            padding: 10px;\n' +
        '            max-width: 200px;\n' +
        '            background-color: var(--background-color);\n' +
        '            color: var(--text-color);\n' +
        '            border-radius: 10px;\n' +
        '            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n' +
        '            margin-left: 850px;\n' +
        '            margin-top: 30px;\n' +
        '        }\n' +
        '\n' +
        '        .progress-bar {\n' +
        '            width: 100%;\n' +
        '            height: 30px;\n' +
        '            background-color: var(--background-color);\n' +
        '            border-radius: 5px;\n' +
        '            margin-bottom: 10px;\n' +
        '        }\n' +
        '\n' +
        '        .layout {\n' +
        '            width: 1920px;\n' +
        '            height: 1080px;\n' +
        '\n' +
        '            display: grid;\n' +
        '            grid-template-rows: repeat(3, 1fr);\n' +
        '            grid-template-columns: repeat(3, 1fr);\n' +
        '            gap: 8px;\n' +
        '        }\n' +
        '\n' +
        '        .fill {\n' +
        '            height: 100%;\n' +
        '            border-radius: 5px;\n' +
        '        }\n' +
        '\n' +
        '        .green {\n' +
        '            background-color: green;\n' +
        '        }\n' +
        '\n' +
        '        .yellow {\n' +
        '            background-color: yellow;\n' +
        '        }\n' +
        '\n' +
        '        .red {\n' +
        '            background-color: red;\n' +
        '        }\n' +
        '\n' +
        '        .toggle-mode {\n' +
        '            position: absolute;\n' +
        '            top: 10px;\n' +
        '            right: 10px;\n' +
        '            cursor: pointer;\n' +
        '            font-size: 18px;\n' +
        '            color: var(--text-color);\n' +
        '        }\n' +
        '\n' +
        '        table {\n' +
        '            width: 100%;\n' +
        '            border-collapse: collapse;\n' +
        '            margin-top: 20px;\n' +
        '            border-spacing: 0 15px;\n' +
        '            background-color: white;\n' +
        '        }\n' +
        '\n' +
        '        th, td {\n' +
        '            width: 150px;\n' +
        '            text-align: center;\n' +
        '            border: 1px solid #000000;\n' +
        '            padding: 5px;\n' +
        '            background-color: #f2f2f2;\n' +
        '        }\n' +
        '\n' +
        '        .progress-bar {\n' +
        '            width: 100%;\n' +
        '            height: 30px;\n' +
        '            background-color: #f2f2f2;\n' +
        '            border: 1px solid #ccc;\n' +
        '            border-radius: 5px;\n' +
        '            overflow: hidden;\n' +
        '        }\n' +
        '\n' +
        '        .fill {\n' +
        '            height: 100%;\n' +
        '            background-color: #000301;\n' +
        '            width: 0;\n' +
        '        }\n' +
        '\n' +
        '        #circle {\n' +
        '            margin-left: 160px;\n' +
        '        }\n' +
        '\n' +
        '        th {\n' +
        '            background-color: #d3d3d3;\n' +
        '        }\n' +
        '\n' +
        '        .card-transaction {\n' +
        '            margin: 20px 0;\n' +
        '            padding: 15px;\n' +
        '            border-radius: 10px;\n' +
        '            background-color: #ffffff;\n' +
        '            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n' +
        '        }\n' +
        '\n' +
        '        body.dark-mode {\n' +
        '            transition: background-color 0.5s ease;\n' +
        '            background-color: rgb(1, 1, 12);\n' +
        '            --background-color: #041328;\n' +
        '        }\n' +
        '\n' +
        '        .dark-mode .container {\n' +
        '            background-color: rgba(129, 121, 121, 0.51);\n' +
        '            --text-color: #eee9e9;\n' +
        '        }\n' +
        '\n' +
        '        .dark-mode table {\n' +
        '            background-color: rgba(134, 21, 21, 0.7);\n' +
        '            --text-color: #eee9e9;\n' +
        '        }\n' +
        '\n' +
        '        .dark-mode th {\n' +
        '            background-color: rgba(35, 5, 5, 0.58);\n' +
        '            --text-color: #eee9e9;\n' +
        '        }\n' +
        '\n' +
        '        .dark-mode .progress-bar {\n' +
        '            background-color: #1f0707;\n' +
        '        }\n' +
        '\n' +
        '        .dark-mode td {\n' +
        '            background-color: rgba(30, 1, 1, 0.97);\n' +
        '            --text-color: #eee9e9;\n' +
        '        }\n' +
        '\n' +
        '        .dark-mode .Top-Bar {\n' +
        '            background-color: #061554;\n' +
        '        < img src = "/static/images/havelsan_logo.svg" alt = "Havelsan" class = "centered-image" >\n' +
        '        }\n' +
        '\n' +
        '        .transaction-title {\n' +
        '            margin-bottom: 5px;\n' +
        '        }\n' +
        '\n' +
        '        .text-primary {\n' +
        '            color: #2d8bf0;\n' +
        '        }\n' +
        '\n' +
        '        .text-success {\n' +
        '            color: #19be6b;\n' +
        '        }\n' +
        '\n' +
        '        .text-warning {\n' +
        '            color: #ff9900;\n' +
        '        }\n' +
        '\n' +
        '        .text-danger {\n' +
        '            color: #ed3f14;\n' +
        '        }\n' +
        '\n' +
        '        /* Additional Style for the Counter Container */\n' +
        '        .counter-container {\n' +
        '            text-align: center;\n' +
        '            margin-bottom: 20px;\n' +
        '        }\n' +
        '\n' +
        '        /* Additional Style to center the container */\n' +
        '        @media (min-width: 768px) {\n' +
        '            .container {\n' +
        '                margin: 50px auto;\n' +
        '            }\n' +
        '        }\n' +
        '    </style>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div class="background-overlay"></div>\n' +
        '<div class="content">\n' +
        '    <div class="toggle-mode" onclick="toggleDarkMode()" fill="red">Mode</div>\n' +
        '\n' +
        '    <header class="Top-Bar">\n' +
        '        <img src="/static/images/havelsan_logo.svg" alt="Havelsan" class="centered-image">\n' +
        '    </header>\n' +
        '\n' +
        '    <div class="dateContainer">\n' +
        '        <div style="height:55px; text-align: center; margin-top: 30px; background-color: #4b95c9; padding: 10px;">\n' +
        '            <span id="currentDate" style="text-align: center;  font-size: 30px; font-weight: bold;"></span>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <section class="layout">\n' +
        '        <div class="container"><h3 style="text-align: center;">TABLDOT MENU</h3>\n' +
        '            <table>\n' +
        '                <tr>\n' +
        '                    <th>Yemek</th>\n' +
        '                    <th>Tür</th>\n' +
        '                    <th>Kalori</th>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Yarma Çorba</td>\n' +
        '                    <td>Çorba</td>\n' +
        '                    <td>190</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bazlamalı Parmak Köfte</td>\n' +
        '                    <td>Ana Yemek</td>\n' +
        '                    <td>350</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Melek Pilavı</td>\n' +
        '                    <td>Yardımcı Yemek</td>\n' +
        '                    <td>290</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Meşrubat</td>\n' +
        '                    <td>Meyve/Tatlı</td>\n' +
        '                    <td>200</td>\n' +
        '                </tr>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div class="container">\n' +
        '            <h1>Sıradaki Kişi Sayısı: <span id="counter">0</span></h1>\n' +
        '            <div class="progress-bar">\n' +
        '                <div class="fill" id="progress"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="container"><h3 style="text-align: center;">TABLDOT DİYET MENU</h3>\n' +
        '            <table>\n' +
        '                <tr>\n' +
        '                    <th>Yemek</th>\n' +
        '                    <th>Tür</th>\n' +
        '                    <th>Kalori</th>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Yarma Çorba</td>\n' +
        '                    <td>Çorba</td>\n' +
        '                    <td>190</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bazlamalı Parmak Köfte</td>\n' +
        '                    <td>Ana Yemek</td>\n' +
        '                    <td>350</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Melek Pilavı</td>\n' +
        '                    <td>Yardımcı Yemek</td>\n' +
        '                    <td>290</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Meşrubat</td>\n' +
        '                    <td>Meyve/Tatlı</td>\n' +
        '                    <td>200</td>\n' +
        '                </tr>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div class="container"><h3 style="text-align: center;">Seçmeli A la Carte Menü</h3>\n' +
        '            <table>\n' +
        '                <tr>\n' +
        '                    <th>Yemek</th>\n' +
        '                    <th>Tür</th>\n' +
        '                    <th>Kalori</th>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Kremalı Mantar Çorba</td>\n' +
        '                    <td>Çorba</td>\n' +
        '                    <td>190</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Etli Saray Kebap</td>\n' +
        '                    <td>Ana Yemek</td>\n' +
        '                    <td>350</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Izgara Kaşarlı Köfte</td>\n' +
        '                    <td>Ana Yemek</td>\n' +
        '                    <td>290</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Pirinç Pilavı</td>\n' +
        '                    <td>Yardımcı Yemek</td>\n' +
        '                    <td>250</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Muz</td>\n' +
        '                    <td>Meyve/Tatlı</td>\n' +
        '                    <td>200</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Trileçe</td>\n' +
        '                    <td>Meyve/Tatlı</td>\n' +
        '                    <td>200</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Yoğurt</td>\n' +
        '                    <td>Yoğurt</td>\n' +
        '                    <td>50</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Su</td>\n' +
        '                    <td>Su</td>\n' +
        '                    <td>0</td>\n' +
        '                </tr>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '\n' +
        '\n' +
        '        <div class="container">\n' +
        '            <div class="circular-progress">\n' +
        '                <span class="progress-value">0%</span>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="container"><h3 style="text-align: center;">MENÜ ÇEŞİTLERİ </h3>\n' +
        '            <table>\n' +
        '                <tr>\n' +
        '                    <th>Menü</th>\n' +
        '                    <th>İçerik</th>\n' +
        '                    <th>Fiyat</th>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>A la Carte Et Menü</td>\n' +
        '                    <td>Çorba,Ana ve Yrd.Yemek,Salata,Tatlı/Meyve/İçecek,Su</td>\n' +
        '                    <td>145</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>A la Carte Tavuk Menü</td>\n' +
        '                    <td>Çorba,Ana ve Yrd.Yemek,Salata,Tatlı/Meyve/İçecek,Su</td>\n' +
        '                    <td>125</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>A la Carte Köfte Menü</td>\n' +
        '                    <td>Çorba,Ana ve Yrd.Yemek,Salata,Tatlı/Meyve/İçecek,Su</td>\n' +
        '                    <td>135</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Kaşarlı Pide Menü</td>\n' +
        '                    <td>Çorba,1 adet Pide,Salata,Tatlı/Meyve/İçecek,Su</td>\n' +
        '                    <td>130</td>\n' +
        '                </tr>\n' +
        '\n' +
        '\n' +
        '            </table>\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '        <div></div>\n' +
        '        <div class="container"><h3 style="text-align: center;">SALATALAR </h3>\n' +
        '            <table>\n' +
        '                <tr>\n' +
        '                    <th>Salata Çeşidi</th>\n' +
        '                    <th>Fiyat</th>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gavurdağ Salata</td>\n' +
        '                    <td>12,5 TL</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Ispanak Borani</td>\n' +
        '                    <td>12,5 TL</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Zyt. Fasulye</td>\n' +
        '                    <td>12,5 TL</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Maydanoz Tabule</td>\n' +
        '                    <td>12,5 TL</td>\n' +
        '                </tr>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '    </section>\n' +
        '\n' +
        '\n' +
        '    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js"></script>\n' +
        '    <script>\n' +
        '        socket = io();\n' +
        '        socket.connect(\'http://127.0.0.1:5000/\');\n' +
        '        socket.on(\'connect\', function () {\n' +
        '            socket.send(\'a\');\n' +
        '        });\n' +
        '        socket.on(\'message\', function (msg) {\n' +
        '            const counterSpan = document.getElementById(\'counter\');\n' +
        '            const progressBar = document.getElementById(\'progress\');\n' +
        '            const count = parseInt(msg);\n' +
        '            // counterSpan.innerText = count;\n' +
        '\n' +
        '            const maxCapacity = 10;\n' +
        '            const progressBarWidth = (count / maxCapacity) * 100;\n' +
        '            // progressBar.style.width = `${progressBarWidth}%`;\n' +
        '            updateCircle(msg);\n' +
        '            socket.send(\'a\');\n' +
        '        });\n' +
        '\n' +
        '        function updateDate() {\n' +
        '            const currentDateElement = document.getElementById(\'currentDate\');\n' +
        '            const currentDate = new Date();\n' +
        '            const day = currentDate.getDate();\n' +
        '            const month = currentDate.getMonth() + 1;\n' +
        '            const year = currentDate.getFullYear();\n' +
        '\n' +
        '            const formattedDate = `${day}.${month}.${year}`;\n' +
        '            currentDateElement.innerText = formattedDate;\n' +
        '        }\n' +
        '\n' +
        '        function updateCircle(count) {\n' +
        '            const countText = document.getElementById(\'countText\');\n' +
        '            const countDiv = document.getElementById(\'count\');\n' +
        '            const displayCount = count * 10;\n' +
        '            countText.innerHTML = `\n' +
        '    <tspan x="50%" dy="-12px">DOLULUK ORANI</tspan>\n' +
        '    <tspan x="50%" dy="24px"> </tspan>\n' +
        '    <tspan x="50%" dy="24px"> </tspan>\n' +
        '    <tspan x="50%" dy="24px"> ${displayCount}%</tspan>\n' +
        '`;\n' +
        '\n' +
        '            const percentage = (displayCount / 1000) * 100;\n' +
        '            const circle = document.getElementById(\'progress\');\n' +
        '            circle.setAttribute(\'stroke-dasharray\', percentage + \'% 100%\');\n' +
        '\n' +
        '            const hue = ((100 - percentage) * 120) / 100; // Calculate hue value from 0 (red) to 120 (green)\n' +
        '            const color = `hsl(${hue}, 100%, 50%)`; // Convert hue to an HSL color value\n' +
        '            circle.setAttribute(\'stroke\', color);\n' +
        '        }\n' +
        '\n' +
        '\n' +
        '        updateDate();\n' +
        '    </script>\n' +
        '\n' +
        '    <script>\n' +
        '        function toggleDarkMode() {\n' +
        '            document.body.classList.toggle(\'dark-mode\');\n' +
        '        }\n' +
        '    </script>\n' +
        '    <script src="progress-bar.js"></script>\n' +
        '    <!--<script src="sayi.js" type="module"></script>-->\n' +
        '</div>\n' +
        '</body>\n' +
        '</html>';

  return (
   <div dangerouslySetInnerHTML={{ __html: index.html }} />
  );
};

export default MyComponent;