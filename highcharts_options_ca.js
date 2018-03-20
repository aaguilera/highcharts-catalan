/*
    Catalan localization options for HighCharts.

    Angel Aguilera <angel.aguilera@gmail.com> (December 2014)
 
    This is free and unencumbered software released into the public domain.
    See http://unlicense.org
 */
Highcharts.setOptions({
    lang: {
        accessibility: {
            axis: {
                xAxisDescriptionPlural: "El diagrama té {numAxes} eixos X mostrant {#each(names, -1), }i {names[-1]}",
                xAxisDescriptionSingular: "El diagrama té 1 eix X mostrant {names[0]}.",
                yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each(names, -1), }and {names[-1]}",
                yAxisDescriptionSingular: "El diagrama té 1 eix X mostrant {names[0]}."
            },
            chartContainerLabel: "Diagrama interactiu. {title}. Usa les fletxes amunt i avall per navegar amb la majoria de lectors de pantalla.",
            chartHeading: "Gràfic del diagrama",
            chartTypes: {
                barMultiple: "Diagrama de barres amb {numSeries} sèries de dades.",
                barSingle: "Diagrama de barres amb {numPoints} {#plural(numPoints, bars, bar)}.",
                boxplotMultiple: "Diagrama de caixa amb {numSeries} sèries de dades.",
                boxplotSingle: "Diagrama de caixa amb {numPoints} {#plural(numPoints, boxes, box)}.",
                bubbleMultiple: "Diagrama de bombolles amb {numSeries} sries de dades.",
                bubbleSingle: "Diagrama de bombolles amb {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                columnMultiple: "Diagrama de barres amb {numSeries} sèries de dades.",
                columnSingle: "Diagrama de barres amb {numPoints} {#plural(numPoints, bars, bar)}.",
                combinationChart: "Diagrama combinat amb {numSeries} sèries de dades.",
                defaultMultiple: "Diagrama amb {numSeries} sèries de dades.",
                defaultSingle: "Diagrama amb {numPoints} dades {#plural(numPoints, points, point)}.",
                emptyChart: "Diagrama buit",
                lineMultiple: "Diagrama de línies amb {numSeries} línies.",
                lineSingle: "Diagrama de línies amb {numPoints} dades {#plural(numPoints, points, point)}.",
                mapTypeDescription: "Mapa de {mapTitle} amb {numSeries} sèries de dades.",
                pieMultiple: "Diagrama de pastís amb {numSeries} sectors.",
                pieSingle: "Diagrama de pastís amb {numPoints} {#plural(numPoints, slices, slice)}.",
                scatterMultiple: "Diagrama de dispersió amb {numSeries} sèries de dades.",
                scatterSingle: "Diagrama de dispersió amb {numPoints} {#plural(numPoints, points, point)}.",
                splineMultiple: "Diagram spline amb {numSeries} línies.",
                splineSingle: "Diagrama spline amb {numPoints} dades {#plural(numPoints, points, point)}.",
                unknownMap: "Mapa de regió no especificada amb {numSeries} sèries de dades."
            },
        },
        contextButtonTitle: "Menú contextual del diagrama",
        decimalPoint: ",",
        downloadCSV: "Desa com a CSV",
        downloadJPEG: "Desa com a imatge JPEG",
        downloadPDF: "Desa com a document PDF",
        downloadPNG: "Desa com a imatge PNG",
        downloadSVG: "Desa com a imatge SVG",
        downloadXLS: "Desa com a XLS",
        drillUpText: "Torna a {series.name}",
        /* invalidDate: "", */
        loading: "S'està carregant...",
        months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        noData: "No hi ha dades per mostrar",
        /* numericSymbolMagnitude: 1000, */
        /* numericSymbols: [ "k" , "M" , "G" , "T" , "P" , "E"], */
        printChart: "Imprimeix el diagrama",
        resetZoom: "Restableix el zoom",
        resetZoomTitle: "Restableix el nivell de zoom 1:1",
        shortMonths: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
        shortWeekdays: ["Dg", "Dl", "Dm", "Dc", "Dj", "Dv", "Ds"],
        thousandsSep: ".",
        viewData: "Mostra la taula de dades",
        weekdays: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
    }
});
