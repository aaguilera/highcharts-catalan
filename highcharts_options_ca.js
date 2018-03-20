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
                barSingle: "Diagrama de barres amb {numPoints} {#plural(numPoints, barres, barra)}.",
                boxplotMultiple: "Diagrama de caixa amb {numSeries} sèries de dades.",
                boxplotSingle: "Diagrama de caixa amb {numPoints} {#plural(numPoints, caixes, caixa)}.",
                bubbleMultiple: "Diagrama de bombolles amb {numSeries} sries de dades.",
                bubbleSingle: "Diagrama de bombolles amb {numPoints} {#plural(numPoints, bombolles, bombolla)}.",
                columnMultiple: "Diagrama de barres amb {numSeries} sèries de dades.",
                columnSingle: "Diagrama de barres amb {numPoints} {#plural(numPoints, barres, barra)}.",
                combinationChart: "Diagrama combinat amb {numSeries} sèries de dades.",
                defaultMultiple: "Diagrama amb {numSeries} sèries de dades.",
                defaultSingle: "Diagrama amb {numPoints} dades {#plural(numPoints, punts, punt)}.",
                emptyChart: "Diagrama buit",
                lineMultiple: "Diagrama de línies amb {numSeries} línies.",
                lineSingle: "Diagrama de línies amb {numPoints} dades {#plural(numPoints, punts, punt)}.",
                mapTypeDescription: "Mapa de {mapTitle} amb {numSeries} sèries de dades.",
                pieMultiple: "Diagrama de pastís amb {numSeries} sectors.",
                pieSingle: "Diagrama de pastís amb {numPoints} {#plural(numPoints, porcions, porció)}.",
                scatterMultiple: "Diagrama de dispersió amb {numSeries} sèries de dades.",
                scatterSingle: "Diagrama de dispersió amb {numPoints} {#plural(numPoints, punts, punt)}.",
                splineMultiple: "Diagram spline amb {numSeries} línies.",
                splineSingle: "Diagrama spline amb {numPoints} dades {#plural(numPoints, punts, punt)}.",
                unknownMap: "Mapa de regió no especificada amb {numSeries} sèries de dades."
            },
            defaultChartTitle: "Diagrama",
            exporting: {
                chartMenuLabel: "Exporta el diagrama",
                exportRegionLabel: "Menú d'exportació del diagrama",
                menuButtonLabel: "Mostra el menú d'exportació"
            },
            legendItem: "Canvia la visibilitat de la sèrie {itemName}",
            longDescriptionHeading: "Descripció llarga.",
            mapZoomIn: "Amplia el diagrama",
            mapZoomOut: "Redueix el diagrama",
            navigationHint: "Utilitzeu les regions/fites per saltar endavant al diagrama {#plural(numSeries, i navegar entre les sèries de dades,)}",
            noDescription: "Sense descripció.",
            rangeSelectorButton: "Selecciona el rang {buttonText}",
            rangeSelectorMaxInput: "Selecciona la data final.",
            rangeSelectorMinInput: "Selecciona la data inicial.",
            screenReaderRegionLabel: "Informació del lector de pantalla sobre el diagrama",
            series: {
                description: "{description}",
                summary: {
                    bar: "{name}, sèrie de barres {ix} de {numSeries} ambh {numPoints} {#plural(numPoints, barres, barra)}.",
                    barCombination: "{name}, sèrie {ix} de {numSeries}. Sèrie de barres amb {numPoints} {#plural(numPoints, barres, barra)}.",
                    boxplot: "{name}, diagrama de caixa {ix} de {numSeries} amb {numPoints} {#plural(numPoints, caixes, caixa)}.",
                    boxplotCombination: "{name}, sèrie {ix} de {numSeries}. Diagrama de caixes amb {numPoints} {#plural(numPoints, caixes, caixa)}.",
                    bubble: "{name}, sèrie de bombolles {ix} de {numSeries} amb {numPoints} {#plural(numPoints, bombolles, bombolla)}.",
                    bubbleCombination: "{name}, sèrie {ix} de {numSeries}. Sèrie de bombolles amb {numPoints} {#plural(numPoints, bombolles, bombolla)}.",
                    column: "{name}, sèrie de barres {ix} de {numSeries} amb {numPoints} {#plural(numPoints, barres, barra)}.",
                    columnCombination: "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",
                    default: "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                    defaultCombination: "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                    line: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                    lineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                    map: "{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.",
                    mapbubble: "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                    mapbubbleCombination: "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                    mapCombination: "{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.",
                    mapline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                    maplineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                    pie: "{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.",
                    pieCombination: "{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",
                    scatter: "{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.",
                    scatterCombination: "{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.",
                    spline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                    splineCombination: "{name}, series {ix} of",
            },
            seriesTypeDescriptions: {
                /*
                arearange:undefined
                areasplinerange:undefined
                boxplot:undefined
                bubble:undefined
                columnrange:undefined
                errorbar:undefined
                funnel:undefined
                pyramid:undefined
                waterfall:undefined
               */
            },
            structureHeading: "Estructura.",
            tableSummary: "Representació tabular del diagrama.",
            viewAsDataTable: "Mostra com a taula de dades."
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
