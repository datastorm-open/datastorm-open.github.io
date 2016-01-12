library(knitr)
library(rmarkdown)
library(yaml)
library(evaluate)
library(curl)

f = rmarkdown::render(commandArgs(TRUE))
# remove version numbers in HTML
r = '-\\d+[.]\\d+([.]\\d+)?$'
v1 = rev(list.files('libs', r, full.names = TRUE))
v2 = gsub(r, '', v1)
v2 = gsub(pattern = 'amcharts_type.*', replacement = 'amcharts', x = v2)
# v2 = gsub(pattern = 'amcharts_theme.*', replacement = 'amcharts/themes', x = v2)
# v2 = gsub(pattern = 'amcharts_plugins_export.*', replacement = 'amcharts/plugins/export', x = v2)
x = readLines(f)
for (i in seq_along(v1)) {
  x = gsub(v1[i], v2[i], x, fixed = TRUE)
}

# delete lower versions of libraries, and only use higher versions
i = duplicated(v2)
unlink(c(v1[i], v2), recursive = TRUE)

file.rename(from = v1[!i], to = v2[!i])
writeLines(x, f)

