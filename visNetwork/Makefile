HTML_FILES := $(patsubst %.Rmd, %.html ,$(wildcard *.Rmd)) \
              $(patsubst %.md, %.html ,$(wildcard *.md))

all: html


html: $(HTML_FILES)

%.html: %.Rmd _includes/* _output.yaml
	"C:\Program Files\R\R-4.0.3\bin\Rscript.exe" compile.R "$<"

%.html: %.md
	"C:\Program Files\R\R-4.0.3\bin\Rscript.exe" compile.R "$<"

.PHONY: clean
clean:
	$(RM) $(HTML_FILES)
	$(RM) -r libs

