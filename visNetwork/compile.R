# setwd(paste(getwd(), "visNetwork", sep = "/"))
set.seed(0102)
# Sys.setenv(R_LIBS_USER = "C:/Users/Datastorm/Documents/R/win-library/3.3")
# Sys.getenv()
library(knitr, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
options(htmlwidgets.TOJSON_ARGS = list(pretty = TRUE))
Sys.setenv(R_KNITR_OPTIONS = 'knitr.chunk.tidy = FALSE')
Sys.setenv(RSTUDIO_PANDOC = "C:/Program Files/RStudio/bin/pandoc")

knitr::opts_chunk$set(out.width = '100%')

library(visNetwork, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
library(rmarkdown, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
library(yaml, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
library(stringr, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
library(evaluate, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
library(curl, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
library(igraph, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")
library(sparkline, lib.loc ="C:/Users/Datastorm/Documents/R/win-library/3.4")

print(pandoc_version())
f = rmarkdown::render(commandArgs(TRUE))
# remove version numbers in HTML
r = '-\\d+[.]\\d+([.]\\d+)?$'
v1 = rev(list.files('libs', r, full.names = TRUE))
v2 = gsub(r, '', v1)
x = readLines(f)
for (i in seq_along(v1)) {
  x = gsub(v1[i], v2[i], x, fixed = TRUE)
}
# delete lower versions of libraries, and only use higher versions
i = duplicated(v2)
unlink(c(v1[i], v2), recursive = TRUE)
file.rename(v1[!i], v2[!i])
writeLines(x, f)

