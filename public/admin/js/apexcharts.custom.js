function generateData(e, t, o) {
    for (var a = 0, r = []; a < t; ) {
        var s = Math.floor(750 * Math.random()) + 1,
            i = Math.floor(Math.random() * (o.max - o.min + 1)) + o.min,
            l = Math.floor(61 * Math.random()) + 15;
        r.push([s, i, l]), a++;
    }
    return r;
}
// nghĩa custom
var columnChart,
    columnChartoptions = {
        series: [
            {
                name: "Orders",
                data: [
                    32, 66, 44, 55, 41, 24, 67, 22, 43, 32, 66, 44, 55, 41, 24,
                    67, 22, 43,
                ],
            },
            {
                name: "Visitors",
                data: [
                    7, 30, 13, 23, 20, 12, 8, 13, 27, 7, 30, 13, 23, 20, 12, 8,
                    13, 27,
                ],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
            stacked: !1,
            columnWidth: "70%",
            zoom: { enabled: !0 },
            toolbar: { show: !1 },
            background: "transparent",
        },
        dataLabels: { enabled: !1 },
        theme: { mode: colors.chartTheme },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: { position: "bottom", offsetX: -10, offsetY: 0 },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "40%",
                radius: 30,
                enableShades: !1,
                endingShape: "rounded",
            },
        },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
                "01/14/2020 GMT",
                "01/15/2020 GMT",
                "01/16/2020 GMT",
                "01/17/2020 GMT",
                "01/18/2020 GMT",
            ],
            labels: {
                show: !0,
                trim: !0,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
            axisBorder: { show: !1 },
        },
        yaxis: {
            labels: {
                show: !0,
                trim: !1,
                offsetX: -10,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
        },
        legend: {
            position: "top",
            fontFamily: base.defaultFontFamily,
            fontWeight: 400,
            labels: { colors: colors.mutedColor, useSeriesColors: !1 },
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: "#fff",
                fillColors: [extend.primaryColor, extend.primaryColorLighter],
                radius: 6,
                customHTML: void 0,
                onClick: void 0,
                offsetX: 0,
                offsetY: 0,
            },
            itemMargin: { horizontal: 10, vertical: 0 },
            onItemClick: { toggleDataSeries: !0 },
            onItemHover: { highlightDataSeries: !0 },
        },
        fill: {
            opacity: 1,
            colors: [base.primaryColor, extend.primaryColorLighter],
        },
        grid: {
            show: !0,
            borderColor: colors.borderColor,
            strokeDashArray: 0,
            position: "back",
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            row: { colors: void 0, opacity: 0.5 },
            column: { colors: void 0, opacity: 0.5 },
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
        },
    },
    columnChartCtn = document.querySelector("#columnChart");
columnChartCtn &&
    (columnChart = new ApexCharts(columnChartCtn, columnChartoptions)).render();
// nghĩa end custom

var barChart,
    barChartoptions = {
        series: [
            { name: "Desktop", data: [44, 55, 41, 64, 22, 43, 21, 53, 32, 33] },
            { name: "Mobile", data: [53, 32, 33, 52, 13, 44, 32, 53, 32, 33] },
            { name: "Tablet", data: [13, 12, 13, 32, 3, 24, 12, 33, 12, 13] },
        ],
        chart: {
            type: "bar",
            height: 350,
            stacked: !0,
            columnWidth: "70%",
            zoom: { enabled: !1 },
            toolbar: { enabled: !1 },
        },
        theme: { mode: colors.chartTheme },
        dataLabels: { enabled: !0 },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: { position: "bottom", offsetX: -10, offsetY: 0 },
                },
            },
        ],
        plotOptions: { bar: { horizontal: !0, columnWidth: "30%" } },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            labels: {
                show: !0,
                trim: !1,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
            axisBorder: { show: !1 },
        },
        yaxis: {
            labels: {
                show: !0,
                trim: !1,
                offsetX: -5,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
        },
        legend: {
            position: "bottom",
            fontFamily: base.defaultFontFamily,
            fontWeight: 400,
            labels: { colors: colors.mutedColor, useSeriesColors: !1 },
            offsetY: 10,
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: colors.borderColor,
                fillColors: chartColors,
                radius: 6,
                customHTML: void 0,
                onClick: void 0,
                offsetX: 0,
                offsetY: 0,
            },
            itemMargin: { horizontal: 10, vertical: 0 },
            onItemClick: { toggleDataSeries: !0 },
            onItemHover: { highlightDataSeries: !0 },
        },
        fill: { opacity: 1, colors: chartColors },
        grid: {
            show: !0,
            borderColor: colors.borderColor,
            strokeDashArray: 0,
            position: "back",
            xaxis: { lines: { show: !0 } },
            yaxis: { lines: { show: !1 } },
            row: { colors: void 0, opacity: 0.5 },
            column: { colors: void 0, opacity: 0.5 },
            padding: { top: 0, right: 0, bottom: 0, left: 10 },
        },
    },
    barChartCtn = document.querySelector("#barChart");
barChartCtn &&
    (barChart = new ApexCharts(barChartCtn, barChartoptions)).render();
var lineChart,
    lineChartoptions = {
        series: [
            {
                name: "Page views",
                data: [
                    31, 28, 30, 51, 42, 109, 100, 31, 40, 28, 31, 58, 30, 51,
                    42, 109, 100, 116,
                ],
            },
            {
                name: "Visitors",
                data: [
                    11, 45, 20, 32, 34, 52, 41, 11, 32, 45, 11, 75, 20, 32, 34,
                    52, 41, 81,
                ],
            },
            {
                name: "Orders",
                data: [
                    5, 25, 9, 14, 14, 32, 21, 5, 12, 25, 5, 55, 9, 14, 14, 32,
                    21, 65,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            background: !1,
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
        },
        theme: { mode: colors.chartTheme },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "round",
            colors: chartColors,
            width: [3, 2, 3],
            dashArray: [0, 0, 0],
        },
        dataLabels: { enabled: !1 },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: { position: "bottom", offsetX: -10, offsetY: 0 },
                },
            },
        ],
        markers: {
            size: 4,
            colors: base.primaryColor,
            strokeColors: colors.borderColor,
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: void 0,
            onDblClick: void 0,
            showNullDataPoints: !0,
            hover: { size: void 0, sizeOffset: 3 },
        },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
                "01/14/2020 GMT",
                "01/15/2020 GMT",
                "01/16/2020 GMT",
                "01/17/2020 GMT",
                "01/18/2020 GMT",
            ],
            labels: {
                show: !0,
                trim: !1,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
            axisBorder: { show: !1 },
        },
        yaxis: {
            labels: {
                show: !0,
                trim: !1,
                offsetX: -10,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
        },
        legend: {
            position: "top",
            fontFamily: base.defaultFontFamily,
            fontWeight: 400,
            labels: { colors: colors.mutedColor, useSeriesColors: !1 },
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: colors.borderColor,
                fillColors: chartColors,
                radius: 6,
                customHTML: void 0,
                onClick: void 0,
                offsetX: 0,
                offsetY: 0,
            },
            itemMargin: { horizontal: 10, vertical: 0 },
            onItemClick: { toggleDataSeries: !0 },
            onItemHover: { highlightDataSeries: !0 },
        },
        grid: {
            show: !0,
            borderColor: colors.borderColor,
            strokeDashArray: 0,
            position: "back",
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            row: { colors: void 0, opacity: 0.5 },
            column: { colors: void 0, opacity: 0.5 },
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
        },
    },
    lineChartCtn = document.querySelector("#lineChart");
lineChartCtn &&
    (lineChart = new ApexCharts(lineChartCtn, lineChartoptions)).render();
var areachart,
    areaChartOptions = {
        series: [
            {
                name: "Website",
                data: [
                    31, 28, 30, 51, 42, 109, 100, 31, 40, 28, 31, 58, 30, 51,
                    42, 109, 100, 116,
                ],
            },
            {
                name: "Mobile Apps",
                data: [
                    11, 45, 20, 32, 34, 52, 41, 11, 32, 45, 11, 75, 20, 32, 34,
                    52, 41, 81,
                ],
            },
            {
                name: "Others",
                data: [
                    5, 25, 9, 14, 14, 32, 21, 5, 12, 25, 5, 55, 9, 14, 14, 32,
                    21, 65,
                ],
            },
        ],
        chart: {
            type: "area",
            height: 350,
            background: "transparent",
            stacked: !0,
            toolbar: { show: !1 },
            zoom: { enabled: !1 },
        },
        theme: { mode: colors.chartTheme },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
                "01/14/2020 GMT",
                "01/15/2020 GMT",
                "01/16/2020 GMT",
                "01/17/2020 GMT",
                "01/18/2020 GMT",
            ],
            labels: {
                show: !0,
                trim: !1,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
            axisBorder: { show: !1 },
            tooltip: { enabled: !1, offsetX: 0 },
        },
        yaxis: {
            labels: {
                show: !0,
                trim: !1,
                offsetX: -10,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
        },
        markers: {
            size: 0,
            strokeColors: "#fff",
            strokeWidth: 0,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: void 0,
            onDblClick: void 0,
            showNullDataPoints: !0,
            hover: { size: void 0, sizeOffset: 3 },
        },
        colors: chartColors,
        dataLabels: { enabled: !1 },
        stroke: { curve: "smooth", lineCap: "round", width: 0 },
        fill: { type: "solid" },
        legend: {
            show: !1,
            position: "bottom",
            fontFamily: base.defaultFontFamily,
            fontWeight: 400,
            labels: { colors: colors.mutedColor, useSeriesColors: !1 },
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: "#fff",
                radius: 6,
            },
            itemMargin: { horizontal: 10, vertical: 0 },
            onItemClick: { toggleDataSeries: !0 },
            onItemHover: { highlightDataSeries: !0 },
        },
        grid: {
            show: !0,
            borderColor: colors.borderColor,
            strokeDashArray: 0,
            position: "back",
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            row: { colors: void 0, opacity: 0.5 },
            column: { colors: void 0, opacity: 0.5 },
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        tooltip: {
            style: { fontSize: "12px", fontFamily: base.defaultFontFamily },
        },
    },
    areachartCtn = document.querySelector("#areaChart");
areachartCtn &&
    (areachart = new ApexCharts(areachartCtn, areaChartOptions)).render();
var lineChartWidget,
    lineChartWidgetoptions = {
        series: [
            {
                name: "Page views",
                data: [
                    31, 28, 30, 51, 42, 88, 86, 31, 40, 28, 31, 58, 30, 51, 42,
                    109, 100, 116,
                ],
            },
            {
                name: "Visitors",
                data: [
                    11, 45, 20, 32, 34, 52, 41, 11, 32, 45, 11, 75, 20, 32, 34,
                    52, 41, 81,
                ],
            },
        ],
        chart: {
            height: 140,
            type: "line",
            toolbar: { show: !1 },
            zoom: { enabled: !1 },
        },
        theme: { mode: colors.chartTheme },
        stroke: {
            show: !0,
            curve: "straight",
            lineCap: "butt",
            colors: chartColors,
            width: [3, 2],
            dashArray: [0, 0],
        },
        dataLabels: { enabled: !1 },
        markers: { size: 0 },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
                "01/14/2020 GMT",
                "01/15/2020 GMT",
                "01/16/2020 GMT",
                "01/17/2020 GMT",
                "01/18/2020 GMT",
            ],
            labels: { show: !1 },
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
        },
        yaxis: { labels: { show: !1 } },
        legend: { show: !1 },
        grid: { show: !1, padding: { top: 0, right: 0, bottom: 0, left: -5 } },
    },
    lineChartWidgetCtn = document.querySelector("#lineChartWidget");
lineChartWidgetCtn &&
    (lineChartWidget = new ApexCharts(
        lineChartWidgetCtn,
        lineChartWidgetoptions
    )).render();
var radialbarWidgetChart,
    radialbarWidgetOptions = {
        series: [86],
        chart: { height: 120, type: "radialBar" },
        theme: { mode: colors.chartTheme },
        plotOptions: {
            radialBar: {
                hollow: { size: "70%" },
                track: { background: colors.borderColor },
                dataLabels: {
                    show: !0,
                    name: {
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        offsetY: -10,
                        show: !1,
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                    },
                    value: {
                        formatter: function (e) {
                            return parseInt(e);
                        },
                        fontSize: "1.53125rem",
                        fontWeight: 700,
                        fontFamily: base.defaultFontFamily,
                        offsetY: 10,
                        show: !0,
                        color: colors.headingColor,
                    },
                    total: {
                        show: !1,
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        offsetY: -10,
                        label: "Percent",
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "diagonal2",
                shadeIntensity: 0.2,
                gradientFromColors: [extend.primaryColorLighter],
                gradientToColors: [base.primaryColor],
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [20, 100],
            },
        },
        stroke: { lineCap: "round" },
    },
    radialbarWidget = document.querySelector("#radialbarWidget");
radialbarWidget &&
    (radialbarWidgetChart = new ApexCharts(
        radialbarWidget,
        radialbarWidgetOptions
    )).render();
var radarChartWidget,
    radarChartWidgetOptions = {
        series: [
            { name: "Mac Os", data: [80, 50, 30, 40, 100, 20] },
            { name: "Windows", data: [20, 30, 40, 80, 20, 80] },
            { name: "iOS", data: [44, 76, 78, 13, 43, 10] },
            { name: "Android", data: [14, 36, 38, 3, 23, 2] },
        ],
        chart: { height: 180, type: "radar", toolbar: { show: !1 } },
        theme: { mode: colors.chartTheme },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: colors.borderColor,
                    strokeWidth: 1,
                    connectorColors: colors.borderColor,
                    fill: { colors: ["transparent"] },
                },
            },
        },
        legend: { show: !1 },
        stroke: { width: 1, colors: chartColors },
        fill: { opacity: 1, colors: chartColors },
        markers: { size: 0 },
        yaxis: {
            labels: {
                style: {
                    colors: colors.mutedColor,
                    fontFamily: base.defaultFontFamily,
                },
            },
        },
        xaxis: {
            categories: ["01", "02", "03", "04", "05", "06"],
            labels: {
                title: {
                    colors: colors.mutedColor,
                    fontFamily: base.defaultFontFamily,
                },
            },
        },
        grid: {
            borderColor: colors.borderColor,
            padding: { top: -10, bottom: -10 },
        },
    },
    radarChartWidgetCtn = document.querySelector("#radarChartWidget");
radarChartWidgetCtn &&
    (radarChartWidget = new ApexCharts(
        radarChartWidgetCtn,
        radarChartWidgetOptions
    )).render();
var pieChartWidget,
    pieChartWidgetOptions = {
        series: [686, 575, 426],
        chart: {
            type: "donut",
            height: 160,
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
        },
        theme: { mode: colors.chartTheme },
        plotOptions: { pie: { donut: { size: "0" }, expandOnClick: !1 } },
        labels: ["Desktop", "Tablet", "Mobile"],
        dataLabels: {
            enabled: !0,
            style: {
                fontSize: "10px",
                fontFamily: base.defaultFontFamily,
                fontWeight: "300",
            },
        },
        legend: { show: !1 },
        stroke: {
            show: !1,
            colors: extend.primaryColorLight,
            width: 1,
            dashArray: 0,
        },
        fill: { opacity: 1, colors: chartColors },
    },
    pieChartWidgetCtn = document.querySelector("#pieChartWidget");
pieChartWidgetCtn &&
    (pieChartWidget = new ApexCharts(
        pieChartWidgetCtn,
        pieChartWidgetOptions
    )).render();
var donutChartWidget,
    donutChartWidgetOptions = {
        series: [44, 55, 20, 41, 17],
        chart: {
            type: "donut",
            height: 180,
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
        },
        theme: { mode: colors.chartTheme },
        plotOptions: {
            pie: {
                donut: { size: "40%", background: "transparent" },
                expandOnClick: !1,
            },
        },
        labels: ["Clothing", "Shoes", "Others", "Electronics", "Books"],
        dataLabels: {
            enabled: !0,
            style: {
                fontSize: "10px",
                fontFamily: base.defaultFontFamily,
                fontWeight: "300",
            },
        },
        legend: { show: !1 },
        stroke: {
            show: !1,
            colors: colors.borderColor,
            width: 1,
            dashArray: 0,
        },
        fill: { opacity: 1, colors: chartColors },
    },
    donutChartWidgetCtn = document.querySelector("#donutChartWidget");
donutChartWidgetCtn &&
    (donutChartWidget = new ApexCharts(
        donutChartWidgetCtn,
        donutChartWidgetOptions
    )).render();
var barChartWidget,
    barChartWidgetoptions = {
        series: [
            { name: "Revenue", data: [44, 55, 41, 64, 22, 43, 36] },
            { name: "Total", data: [53, 32, 33, 52, 13, 44, 26] },
            { name: "Cost", data: [13, 12, 13, 32, 3, 24, 18] },
        ],
        chart: {
            type: "bar",
            height: 165,
            stacked: !0,
            zoom: { enabled: !0 },
            toolbar: { show: !1 },
        },
        theme: { mode: colors.chartTheme },
        dataLabels: { enabled: !1 },
        plotOptions: {
            bar: { horizontal: !0, columnWidth: "20%", barHeight: "40%" },
        },
        xaxis: {
            categories: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thusday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            labels: { show: !1 },
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
        },
        yaxis: { labels: { show: !1 }, reversed: !0 },
        legend: { show: !1 },
        fill: { opacity: 1, colors: chartColors },
        grid: {
            show: !1,
            padding: { top: -15, right: -15, bottom: -15, left: -10 },
            position: "back",
        },
    },
    barChartWidgetCtn = document.querySelector("#barChartWidget");
barChartWidgetCtn &&
    (barChartWidget = new ApexCharts(
        barChartWidgetCtn,
        barChartWidgetoptions
    )).render();
var areaChartWidget,
    areaChartWidgetOptions = {
        series: [
            {
                name: "Website",
                data: [
                    31, 28, 30, 51, 42, 109, 100, 31, 40, 28, 31, 58, 30, 51,
                    42, 109, 100, 98,
                ],
            },
            {
                name: "Mobile Apps",
                data: [
                    11, 45, 20, 32, 34, 52, 41, 11, 32, 45, 11, 75, 20, 32, 34,
                    52, 41, 50,
                ],
            },
            {
                name: "Others",
                data: [
                    5, 25, 9, 14, 14, 32, 21, 5, 12, 25, 5, 55, 9, 14, 14, 32,
                    21, 30,
                ],
            },
        ],
        chart: {
            type: "area",
            height: 190,
            stacked: !0,
            toolbar: { show: !1 },
            zoom: { enabled: !0 },
        },
        theme: { mode: colors.chartTheme },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
                "01/14/2020 GMT",
                "01/15/2020 GMT",
                "01/16/2020 GMT",
                "01/17/2020 GMT",
                "01/18/2020 GMT",
            ],
            labels: { show: !1 },
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            floating: !0,
        },
        yaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
        markers: { show: !1, size: 0 },
        colors: chartColors,
        dataLabels: { show: !1, enabled: !1 },
        stroke: { curve: "smooth", width: 0 },
        fill: { type: "solid" },
        legend: { show: !1 },
        grid: {
            show: !1,
            padding: { top: -15, right: 0, bottom: -10, left: -15 },
        },
    },
    areaChartWidgetCtn = document.querySelector("#areaChartWidget");
areaChartWidgetCtn &&
    (areaChartWidget = new ApexCharts(
        areaChartWidgetCtn,
        areaChartWidgetOptions
    )).render();
var columnChartWidget,
    columnChartWidgetoptions = {
        series: [
            {
                name: "Orders",
                data: [32, 66, 44, 55, 41, 24, 67, 22, 43, 32, 66, 44, 55],
            },
            {
                name: "Visitors",
                data: [7, 30, 13, 23, 20, 12, 8, 13, 27, 7, 30, 13, 23],
            },
        ],
        chart: {
            type: "bar",
            height: 150,
            stacked: !1,
            columnWidth: "70%",
            toolbar: { show: !1 },
            zoom: { enabled: !1 },
        },
        theme: { mode: colors.chartTheme },
        dataLabels: { enabled: !1 },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "40%",
                radius: 30,
                enableShades: !1,
                endingShape: "rounded",
            },
        },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
            ],
            labels: { show: !1 },
            axisTicks: { show: !1 },
            axisBorder: { show: !1 },
        },
        yaxis: { labels: { show: !1 } },
        legend: { show: !1 },
        fill: { opacity: 1, colors: chartColors },
        grid: { show: !1, padding: { top: 0, right: 0, bottom: 0, left: -15 } },
    },
    columnChartWidgetCtn = document.querySelector("#columnChartWidget");
columnChartWidgetCtn &&
    (columnChartWidget = new ApexCharts(
        columnChartWidgetCtn,
        columnChartWidgetoptions
    )).render();
var columnChartWidget2,
    columnChartWidget2options = {
        series: [
            {
                name: "Orders",
                data: [
                    32, 66, 44, 55, 41, 24, 67, 22, 43, 32, 66, 44, 55, 41, 24,
                    67, 22, 43,
                ],
            },
            {
                name: "Visitors",
                data: [
                    7, 30, 13, 23, 20, 12, 8, 13, 27, 7, 30, 13, 23, 20, 12, 8,
                    13, 27,
                ],
            },
        ],
        chart: {
            type: "bar",
            height: 240,
            stacked: !1,
            columnWidth: "70%",
            toolbar: { show: !1 },
            zoom: { enabled: !1 },
        },
        theme: { mode: colors.chartTheme },
        dataLabels: { enabled: !1 },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "40%",
                radius: 30,
                enableShades: !1,
                endingShape: "rounded",
            },
        },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
                "01/14/2020 GMT",
                "01/15/2020 GMT",
                "01/16/2020 GMT",
                "01/17/2020 GMT",
                "01/18/2020 GMT",
            ],
            labels: {
                show: !0,
                trim: !0,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
            axisTicks: { show: !1 },
            axisBorder: { show: !1 },
        },
        yaxis: { labels: { show: !1 } },
        legend: { show: !1 },
        fill: {
            opacity: 1,
            colors: [base.primaryColor, extend.primaryColorLighter],
        },
        grid: {
            show: !1,
            padding: { top: 0, right: 0, bottom: -15, left: -15 },
        },
    },
    columnChartWidget2Ctn = document.querySelector("#columnChartWidget2");
columnChartWidget2Ctn &&
    (columnChartWidget2 = new ApexCharts(
        columnChartWidget2Ctn,
        columnChartWidget2options
    )).render();
var heatmapChartWidget,
    heatmapChartWidgetOptions = {
        series: [
            {
                name: "Mon",
                data: [61, 98, 16, 9, 97, 20, 14, 18, 19, 33, 76, 78],
            },
            {
                name: "Tue",
                data: [77, 76, 10, 47, 13, 56, 71, 83, 32, 57, 87, 96],
            },
            {
                name: "Wed",
                data: [48, 23, 27, 90, 37, 32, 88, 96, 65, 46, 63, 17],
            },
            {
                name: "Thu",
                data: [70, 33, 71, 90, 34, 63, 93, 80, 39, 40, 41, 67],
            },
            {
                name: "Fri",
                data: [78, 98, 19, 74, 41, 59, 95, 99, 37, 17, 11, 60],
            },
            {
                name: "Sat",
                data: [46, 95, 52, 36, 34, 65, 2, 3, 13, 77, 72, 71],
            },
            {
                name: "Sun",
                data: [2, 93, 68, 3, 53, 56, 79, 64, 46, 14, 22, 94],
            },
        ],
        chart: { height: 190, type: "heatmap", toolbar: { show: !1 } },
        theme: { mode: colors.chartTheme },
        dataLabels: { enabled: !1 },
        colors: chartColors,
        xaxis: {
            type: "category",
            categories: [
                "09:00",
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "01:00",
                "01:30",
                "02:00",
                "02:30",
            ],
            labels: { show: !1, maxHeight: 0 },
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
        },
        yaxis: { labels: { show: !1, maxHeight: 0 } },
        grid: {
            show: !1,
            padding: { top: -10, right: 10, bottom: 0, left: 0 },
        },
        stroke: {
            show: !0,
            colors: [colors.borderColor],
            width: 1,
            dashArray: 0,
        },
    },
    heatmapChartWidgetCtn = document.querySelector("#heatmapChartWidget");
heatmapChartWidgetCtn &&
    (heatmapChartWidget = new ApexCharts(
        heatmapChartWidgetCtn,
        heatmapChartWidgetOptions
    )).render();
var heatmapchart,
    heatmapChartOptions = {
        series: [
            {
                name: "Set 1",
                data: [
                    61, 98, 16, 9, 97, 20, 14, 18, 19, 33, 76, 78, 63, 89, 99,
                    30,
                ],
            },
            {
                name: "Set 2",
                data: [
                    77, 76, 10, 47, 13, 56, 71, 83, 32, 57, 87, 96, 99, 85, 1,
                    15,
                ],
            },
            {
                name: "Set 3",
                data: [
                    48, 23, 27, 90, 37, 32, 88, 96, 65, 46, 63, 17, 40, 42, 77,
                    41,
                ],
            },
            {
                name: "Set 4",
                data: [
                    70, 33, 71, 90, 34, 63, 93, 80, 39, 40, 41, 67, 86, 8, 91,
                    79,
                ],
            },
            {
                name: "Set 5",
                data: [
                    78, 98, 19, 74, 41, 59, 95, 99, 37, 17, 11, 60, 44, 7, 61,
                    39,
                ],
            },
            {
                name: "Set 6",
                data: [
                    46, 95, 52, 36, 34, 65, 2, 3, 13, 77, 72, 71, 93, 25, 83,
                    98,
                ],
            },
            {
                name: "Set 7",
                data: [
                    2, 93, 68, 3, 53, 56, 79, 64, 46, 14, 22, 94, 60, 81, 51,
                    15,
                ],
            },
            {
                name: "Set 8",
                data: [
                    13, 1, 45, 30, 19, 71, 86, 51, 59, 9, 28, 95, 61, 6, 37, 54,
                ],
            },
        ],
        chart: { height: 350, type: "heatmap", toolbar: { show: !1 } },
        theme: { mode: colors.chartTheme },
        dataLabels: { enabled: !1 },
        colors: chartColors,
        xaxis: {
            type: "category",
            categories: [
                "09:00",
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "01:00",
                "01:30",
                "02:00",
                "02:30",
                "03:00",
                "03:30",
                "04:00",
                "04:30",
            ],
            labels: {
                show: !0,
                trim: !1,
                minHeight: void 0,
                maxHeight: 100,
                style: {
                    fontSize: "0.875rem",
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
            axisBorder: { show: !1 },
        },
        yaxis: {
            labels: {
                show: !0,
                trim: !1,
                offsetX: -10,
                minHeight: void 0,
                maxHeight: 120,
                style: {
                    fontSize: "0.875rem",
                    colors: colors.mutedColor,
                    cssClass: "text-muted",
                    fontFamily: base.defaultFontFamily,
                },
            },
        },
        grid: {
            show: !0,
            borderColor: colors.borderColor,
            strokeDashArray: 0,
            position: "back",
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            row: { colors: void 0, opacity: 0.5 },
            column: { colors: void 0, opacity: 0.5 },
            padding: { top: 0, right: 10, bottom: 0, left: 0 },
        },
        stroke: { colors: [colors.borderColor], width: 1 },
    },
    heatmapchartCtn = document.querySelector("#heatmapChart");
heatmapchartCtn &&
    (heatmapchart = new ApexCharts(
        heatmapchartCtn,
        heatmapChartOptions
    )).render();
var bubblechart,
    bubbleChartOptions = {
        series: [
            {
                name: "Type 1",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "Type 2",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "Type 3",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "Type 4",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
        ],
        chart: {
            height: 350,
            type: "bubble",
            zoom: { enabled: !1 },
            sparkline: { enabled: !1 },
        },
        theme: { mode: colors.chartTheme },
        dataLabels: { enabled: !1 },
        colors: chartColors,
        xaxis: {
            tickAmount: 12,
            type: "category",
            labels: {
                show: !0,
                trim: !1,
                minHeight: void 0,
                maxHeight: 120,
                style: { colors: colors.mutedColor, cssClass: "small" },
            },
            axisBorder: { show: !1 },
        },
        yaxis: {
            labels: {
                show: !0,
                trim: !1,
                offsetX: -10,
                minHeight: void 0,
                maxHeight: 120,
                style: { colors: colors.mutedColor, cssClass: "small" },
            },
        },
        legend: {
            position: "top",
            fontFamily: base.defaultFontFamily,
            fontWeight: 400,
            labels: { colors: colors.mutedColor, useSeriesColors: !1 },
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: colors.borderColor,
                radius: 6,
            },
            itemMargin: { horizontal: 10, vertical: 0 },
            onItemClick: { toggleDataSeries: !0 },
            onItemHover: { highlightDataSeries: !0 },
        },
        markers: { strokeWidth: 0 },
        grid: {
            show: !0,
            borderColor: colors.borderColor,
            strokeDashArray: 0,
            position: "back",
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            row: { colors: void 0, opacity: 0.5 },
            column: { colors: void 0, opacity: 0.5 },
            padding: { top: 0, right: 10, bottom: 0, left: 0 },
        },
    },
    bubblechartCtn = document.querySelector("#bubbleChart");
bubblechartCtn &&
    (bubblechart = new ApexCharts(bubblechartCtn, bubbleChartOptions)).render();
var donutchart,
    donutChartOptions = {
        series: [44, 55, 20, 41, 17],
        chart: { type: "donut", height: 305, zoom: { enabled: !1 } },
        theme: { mode: colors.chartTheme },
        plotOptions: { pie: { donut: { size: "40%" }, expandOnClick: !1 } },
        labels: ["Clothing", "Shoes", "Others", "Electronics", "Books"],
        legend: {
            position: "bottom",
            fontFamily: base.defaultFontFamily,
            fontWeight: 400,
            labels: { colors: colors.mutedColor, useSeriesColors: !1 },
            horizontalAlign: "left",
            fontFamily: base.defaultFontFamily,
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: "#fff",
                radius: 6,
            },
            itemMargin: { horizontal: 10, vertical: 2 },
            onItemClick: { toggleDataSeries: !0 },
            onItemHover: { highlightDataSeries: !0 },
        },
        stroke: { colors: [colors.borderColor], width: 1 },
        fill: { opacity: 1, colors: chartColors },
    },
    donutchartCtn = document.querySelector("#donutChart");
donutchartCtn &&
    (donutchart = new ApexCharts(donutchartCtn, donutChartOptions)).render();
var radarchart,
    radarChartOptions = {
        series: [
            { name: "Mac Os", data: [80, 50, 30, 40, 100, 20] },
            { name: "Windows", data: [20, 30, 40, 80, 20, 80] },
            { name: "iOS", data: [44, 76, 78, 13, 43, 10] },
            { name: "Android", data: [14, 36, 38, 3, 23, 2] },
        ],
        chart: { height: 325, type: "radar", toolbar: { show: !1 } },
        theme: { mode: colors.chartTheme },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: colors.borderColor,
                    strokeWidth: 1,
                    connectorColors: colors.borderColor,
                    fill: { colors: ["transparent"] },
                },
            },
        },
        legend: {
            fontFamily: base.defaultFontFamily,
            fontWeight: 400,
            labels: { colors: colors.mutedColor, useSeriesColors: !1 },
        },
        stroke: { width: 2, colors: chartColors },
        fill: { opacity: 1, colors: chartColors },
        markers: { size: 0 },
        xaxis: { categories: ["01", "02", "03", "04", "05", "06"] },
    },
    radarChartCtn = document.querySelector("#radarChart");
radarChartCtn &&
    (radarchart = new ApexCharts(radarChartCtn, radarChartOptions)).render();
var candlechart,
    candleChartOptions = {
        series: [
            {
                data: [
                    {
                        x: new Date(15387786e5),
                        y: [6629.81, 6650.5, 6623.04, 6633.33],
                    },
                    {
                        x: new Date(15387804e5),
                        y: [6632.01, 6643.59, 6620, 6630.11],
                    },
                    {
                        x: new Date(15387822e5),
                        y: [6630.71, 6648.95, 6623.34, 6635.65],
                    },
                    {
                        x: new Date(1538784e6),
                        y: [6635.65, 6651, 6629.67, 6638.24],
                    },
                    {
                        x: new Date(15387858e5),
                        y: [6638.24, 6640, 6620, 6624.47],
                    },
                    {
                        x: new Date(15387876e5),
                        y: [6624.53, 6636.03, 6621.68, 6624.31],
                    },
                    {
                        x: new Date(15387894e5),
                        y: [6624.61, 6632.2, 6617, 6626.02],
                    },
                    {
                        x: new Date(15387912e5),
                        y: [6627, 6627.62, 6584.22, 6603.02],
                    },
                    {
                        x: new Date(1538793e6),
                        y: [6605, 6608.03, 6598.95, 6604.01],
                    },
                    {
                        x: new Date(15387948e5),
                        y: [6604.5, 6614.4, 6602.26, 6608.02],
                    },
                    {
                        x: new Date(15387966e5),
                        y: [6608.02, 6610.68, 6601.99, 6608.91],
                    },
                    {
                        x: new Date(15387984e5),
                        y: [6608.91, 6618.99, 6608.01, 6612],
                    },
                    {
                        x: new Date(15388002e5),
                        y: [6612, 6615.13, 6605.09, 6612],
                    },
                    {
                        x: new Date(1538802e6),
                        y: [6612, 6624.12, 6608.43, 6622.95],
                    },
                    {
                        x: new Date(15388038e5),
                        y: [6623.91, 6623.91, 6615, 6615.67],
                    },
                    {
                        x: new Date(15388056e5),
                        y: [6618.69, 6618.74, 6610, 6610.4],
                    },
                    {
                        x: new Date(15388074e5),
                        y: [6611, 6622.78, 6610.4, 6614.9],
                    },
                    {
                        x: new Date(15388092e5),
                        y: [6614.9, 6626.2, 6613.33, 6623.45],
                    },
                    {
                        x: new Date(1538811e6),
                        y: [6623.48, 6627, 6618.38, 6620.35],
                    },
                    {
                        x: new Date(15388128e5),
                        y: [6619.43, 6620.35, 6610.05, 6615.53],
                    },
                    {
                        x: new Date(15388146e5),
                        y: [6615.53, 6617.93, 6610, 6615.19],
                    },
                    {
                        x: new Date(15388164e5),
                        y: [6615.19, 6621.6, 6608.2, 6620],
                    },
                    {
                        x: new Date(15388182e5),
                        y: [6619.54, 6625.17, 6614.15, 6620],
                    },
                    {
                        x: new Date(153882e7),
                        y: [6620.33, 6634.15, 6617.24, 6624.61],
                    },
                    {
                        x: new Date(15388218e5),
                        y: [6625.95, 6626, 6611.66, 6617.58],
                    },
                    {
                        x: new Date(15388236e5),
                        y: [6619, 6625.97, 6595.27, 6598.86],
                    },
                    {
                        x: new Date(15388254e5),
                        y: [6598.86, 6598.88, 6570, 6587.16],
                    },
                    {
                        x: new Date(15388272e5),
                        y: [6588.86, 6600, 6580, 6593.4],
                    },
                    {
                        x: new Date(1538829e6),
                        y: [6593.99, 6598.89, 6585, 6587.81],
                    },
                    {
                        x: new Date(15388308e5),
                        y: [6587.81, 6592.73, 6567.14, 6578],
                    },
                    {
                        x: new Date(15388326e5),
                        y: [6578.35, 6581.72, 6567.39, 6579],
                    },
                    {
                        x: new Date(15388344e5),
                        y: [6579.38, 6580.92, 6566.77, 6575.96],
                    },
                    {
                        x: new Date(15388362e5),
                        y: [6575.96, 6589, 6571.77, 6588.92],
                    },
                    {
                        x: new Date(1538838e6),
                        y: [6588.92, 6594, 6577.55, 6589.22],
                    },
                    {
                        x: new Date(15388398e5),
                        y: [6589.3, 6598.89, 6589.1, 6596.08],
                    },
                    {
                        x: new Date(15388416e5),
                        y: [6597.5, 6600, 6588.39, 6596.25],
                    },
                    {
                        x: new Date(15388434e5),
                        y: [6598.03, 6600, 6588.73, 6595.97],
                    },
                    {
                        x: new Date(15388452e5),
                        y: [6595.97, 6602.01, 6588.17, 6602],
                    },
                    {
                        x: new Date(1538847e6),
                        y: [6602, 6607, 6596.51, 6599.95],
                    },
                    {
                        x: new Date(15388488e5),
                        y: [6600.63, 6601.21, 6590.39, 6591.02],
                    },
                    {
                        x: new Date(15388506e5),
                        y: [6591.02, 6603.08, 6591, 6591],
                    },
                    { x: new Date(15388524e5), y: [6591, 6601.32, 6585, 6592] },
                    {
                        x: new Date(15388542e5),
                        y: [6593.13, 6596.01, 6590, 6593.34],
                    },
                    {
                        x: new Date(1538856e6),
                        y: [6593.34, 6604.76, 6582.63, 6593.86],
                    },
                    {
                        x: new Date(15388578e5),
                        y: [6593.86, 6604.28, 6586.57, 6600.01],
                    },
                    {
                        x: new Date(15388596e5),
                        y: [6601.81, 6603.21, 6592.78, 6596.25],
                    },
                    {
                        x: new Date(15388614e5),
                        y: [6596.25, 6604.2, 6590, 6602.99],
                    },
                    {
                        x: new Date(15388632e5),
                        y: [6602.99, 6606, 6584.99, 6587.81],
                    },
                    {
                        x: new Date(1538865e6),
                        y: [6587.81, 6595, 6583.27, 6591.96],
                    },
                    {
                        x: new Date(15388668e5),
                        y: [6591.97, 6596.07, 6585, 6588.39],
                    },
                    {
                        x: new Date(15388686e5),
                        y: [6587.6, 6598.21, 6587.6, 6594.27],
                    },
                    {
                        x: new Date(15388704e5),
                        y: [6596.44, 6601, 6590, 6596.55],
                    },
                    {
                        x: new Date(15388722e5),
                        y: [6598.91, 6605, 6596.61, 6600.02],
                    },
                    {
                        x: new Date(1538874e6),
                        y: [6600.55, 6605, 6589.14, 6593.01],
                    },
                    {
                        x: new Date(15388758e5),
                        y: [6593.15, 6605, 6592, 6603.06],
                    },
                    {
                        x: new Date(15388776e5),
                        y: [6603.07, 6604.5, 6599.09, 6603.89],
                    },
                    {
                        x: new Date(15388794e5),
                        y: [6604.44, 6604.44, 6600, 6603.5],
                    },
                    {
                        x: new Date(15388812e5),
                        y: [6603.5, 6603.99, 6597.5, 6603.86],
                    },
                    {
                        x: new Date(1538883e6),
                        y: [6603.85, 6605, 6600, 6604.07],
                    },
                    {
                        x: new Date(15388848e5),
                        y: [6604.98, 6606, 6604.07, 6606],
                    },
                ],
            },
        ],
        chart: {
            type: "candlestick",
            height: 325,
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
        },
        theme: { mode: colors.chartTheme },
        xaxis: {
            type: "datetime",
            labels: {
                show: !0,
                trim: !1,
                minHeight: void 0,
                maxHeight: 120,
                style: { colors: colors.mutedColor, cssClass: "small" },
            },
            axisBorder: { show: !1 },
        },
        yaxis: {
            labels: {
                show: !0,
                trim: !1,
                offsetX: -10,
                minHeight: void 0,
                maxHeight: 120,
                style: { colors: colors.mutedColor, cssClass: "small" },
            },
        },
        grid: {
            show: !0,
            borderColor: colors.borderColor,
            strokeDashArray: 0,
            position: "back",
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            row: { colors: void 0, opacity: 0.5 },
            column: { colors: void 0, opacity: 0.5 },
            padding: { top: 0, right: 10, bottom: 0, left: 0 },
        },
    },
    candlechartCtn = document.querySelector("#candleChart");
candlechartCtn &&
    (candlechart = new ApexCharts(candlechartCtn, candleChartOptions)).render();
var radialbarChart,
    radialbarOptions = {
        series: [70],
        chart: { height: 200, type: "radialBar" },
        plotOptions: {
            radialBar: {
                hollow: { size: "75%" },
                track: { background: colors.borderColor },
                dataLabels: {
                    show: !0,
                    name: {
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        offsetY: -10,
                        show: !0,
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                    },
                    value: {
                        formatter: function (e) {
                            return parseInt(e);
                        },
                        color: colors.headingColor,
                        fontSize: "1.53125rem",
                        fontWeight: 700,
                        fontFamily: base.defaultFontFamily,
                        offsetY: 5,
                        show: !0,
                    },
                    total: {
                        show: !0,
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        offsetY: -10,
                        label: "Percent",
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "diagonal2",
                shadeIntensity: 0.2,
                gradientFromColors: [extend.primaryColorLighter],
                gradientToColors: [extend.primaryColorDark],
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [20, 100],
            },
        },
        stroke: { lineCap: "round" },
        labels: ["CPU"],
    },
    radialbar = document.querySelector("#radialbar");
radialbar &&
    (radialbarChart = new ApexCharts(radialbar, radialbarOptions)).render();
var multiRadialbarChart,
    multiRadialbarOptions = {
        series: [44, 55, 67, 83],
        chart: { height: 200, type: "radialBar" },
        plotOptions: {
            radialBar: {
                track: { background: colors.borderColor },
                dataLabels: {
                    name: {
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        offsetY: -10,
                        show: !0,
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                    },
                    value: {
                        fontSize: "1.53125rem",
                        fontWeight: 700,
                        fontFamily: base.defaultFontFamily,
                        offsetY: 0,
                        show: !0,
                        color: colors.headingColor,
                    },
                    total: {
                        show: !0,
                        fontSize: "0.825rem",
                        fontWeight: 400,
                        offsetY: -5,
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                        formatter: function (e) {
                            return 249;
                        },
                    },
                },
            },
        },
        stroke: { lineCap: "round" },
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
    multiRadialbar = document.querySelector("#multiRadialbar");
multiRadialbar &&
    (multiRadialbarChart = new ApexCharts(
        multiRadialbar,
        multiRadialbarOptions
    )).render();
var customAngleChart,
    customAngleOptions = {
        series: [76, 67, 61, 90],
        chart: { id: "cta", height: 200, type: "radialBar" },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                track: { background: colors.borderColor },
                hollow: {
                    margin: 5,
                    size: "40%",
                    background: "transparent",
                    image: void 0,
                },
                dataLabels: { name: { show: !1 }, value: { show: !1 } },
            },
        },
        fill: { opacity: 1, colors: chartColors },
        labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
        legend: {
            show: !1,
            floating: !0,
            labels: { useSeriesColors: !0 },
            markers: { size: 0 },
            formatter: function (e, t) {
                return e + ":  " + t.w.globals.series[t.seriesIndex];
            },
            itemMargin: { vertical: 3 },
        },
        stroke: { lineCap: "round" },
    },
    customAngle = document.querySelector("#customAngle");
customAngle &&
    (customAngleChart = new ApexCharts(
        customAngle,
        customAngleOptions
    )).render();
var gradientRadialChart,
    gradientRadialOptions = {
        series: [75],
        chart: { height: 200, type: "radialBar", toolbar: { show: !1 } },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: colors.backgroundColor,
                    image: void 0,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                },
                track: {
                    background: colors.backgroundColor,
                    strokeWidth: "67%",
                    margin: 0,
                },
                dataLabels: {
                    show: !0,
                    name: {
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        offsetY: -10,
                        show: !0,
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                    },
                    value: {
                        formatter: function (e) {
                            return parseInt(e);
                        },
                        color: colors.headingColor,
                        fontSize: "1.53125rem",
                        fontWeight: 700,
                        fontFamily: base.defaultFontFamily,
                        offsetY: 5,
                        show: !0,
                    },
                    total: {
                        show: !0,
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        offsetY: -10,
                        color: colors.mutedColor,
                        fontFamily: base.defaultFontFamily,
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#ABE5A1"],
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: { lineCap: "round" },
        labels: ["Percent"],
    },
    gradientRadial = document.querySelector("#gradientRadial");
gradientRadial &&
    (gradientRadialChart = new ApexCharts(
        gradientRadial,
        gradientRadialOptions
    )).render();
var strokeRadialChart,
    strokeRadialOptions = {
        series: [67],
        chart: { height: 185, type: "radialBar", offsetY: -10 },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 125,
                track: { background: colors.borderColor },
                dataLabels: {
                    name: {
                        fontSize: "12px",
                        color: colors.mutedColor,
                        offsetY: 90,
                        fontFamily: base.defaultFontFamily,
                        fontWeight: 400,
                    },
                    value: {
                        offsetY: 56,
                        fontSize: "20px",
                        fontWeight: 700,
                        color: colors.headingColor,
                        fontFamily: base.defaultFontFamily,
                        formatter: function (e) {
                            return e + "%";
                        },
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                shadeIntensity: 0.15,
                inverseColors: !1,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
            },
        },
        stroke: { dashArray: 4, colors: "#fff" },
        labels: ["Median Ratio"],
    },
    strokeRadial = document.querySelector("#strokeRadial");
strokeRadial &&
    (strokeRadialChart = new ApexCharts(
        strokeRadial,
        strokeRadialOptions
    )).render();
var semiRadialChart,
    semiRadialOptions = {
        series: [76],
        chart: { type: "radialBar", offsetY: -10, sparkline: { enabled: !0 } },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: colors.borderColor,
                    strokeWidth: "97%",
                    margin: 5,
                },
                dataLabels: {
                    name: { show: !1 },
                    value: {
                        offsetY: -2,
                        fontSize: "20px",
                        fontWeight: 700,
                        color: colors.headingColor,
                        fontFamily: base.defaultFontFamily,
                    },
                },
            },
        },
        grid: { padding: { top: -10 } },
        fill: { type: "solid", colors: [base.primaryColor] },
        stroke: { curve: "smooth", lineCap: "round" },
        labels: ["Average Results"],
    },
    semiRadial = document.querySelector("#semiRadial");
semiRadial &&
    (semiRadialChart = new ApexCharts(semiRadial, semiRadialOptions)).render();
