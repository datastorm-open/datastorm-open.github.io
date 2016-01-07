start <- as.POSIXct('01-01-2015', format = '%d-%m-%Y')
end <- as.POSIXct('01-12-2015', format = '%d-%m-%Y')
date <- seq.POSIXt(from = start, to = end, by = 'month')
(date <- format(date, '%d-%m-%Y'))

date <- c(date[1:4], '10-04-2015', date[5:12])
open <- rnorm(length(date))
low <- open - runif(length(date))
close <- open + 1
high <- close + runif(length(date))


data_candle <- data.frame(date = date, open = open, close = close, low = low, high = high)

main = ""
mainSize = 15
xlab = ""
ylab = ""
horiz = FALSE
positive_color = "blue"
negative_color = "red"


pipeR::pipeline(
  amSerialChart(dataProvider = data_candle, categoryField = "date",
                dataDateFormat = "DD-MM-YYYY"),
  setChartCursor(),
  addValueAxis(title = ylab, position = 'left'),
  setCategoryAxis(parseDates = TRUE, minPeriod = "DD"),
  addGraph(id = "g1", lowField = 'low', closeField = 'close',
           highField = 'high', openField = 'open', fillAlphas = .9,
           valueField = 'close', type = "candlestick")
)