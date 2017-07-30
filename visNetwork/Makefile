HTML_FILES := $(patsubst %.Rmd, %.html ,$(wildcard *.Rmd)) \
              $(patsubst %.md, %.html ,$(wildcard *.md))

all: html


html: $(HTML_FILES)

%.html: %.Rmd _includes/* _output.yaml
	C:\Program Files\R\R-3.3.2\bin\x64\Rscript compile.R "$<"

%.html: %.md
	C:\Program Files\R\R-3.3.2\bin\x64\Rscript compile.R "$<"

.PHONY: clean
clean:
	$(RM) $(HTML_FILES)
	$(RM) -r libs

