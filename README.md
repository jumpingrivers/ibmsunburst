
<!-- badges: start -->

[![Lifecycle:
stable](https://img.shields.io/badge/lifecycle-stable-brightgreen.svg)](https://lifecycle.r-lib.org/articles/stages.html#stable)
[![CRAN
status](https://www.r-pkg.org/badges/version/ibmsunburst)](https://CRAN.R-project.org/package=ibmsunburst)
[![Codecov test
coverage](https://codecov.io/gh/jumpingrivers/ibmsunburst/branch/main/graph/badge.svg)](https://app.codecov.io/gh/jumpingrivers/ibmsunburst?branch=main)
[![R-CMD-check](https://github.com/jumpingrivers/ibmsunburst/workflows/R-CMD-check/badge.svg)](https://github.com/jumpingrivers/ibmsunburst/actions)
<!-- badges: end -->

# IBM Personality Insights sunburst diagrams in R

The goal of {ibmsunburst} is to wrap the [JavaScript library that IBM
have produced](https://github.com/personality-insights/sunburst-chart/)
for making sunburst personality insights charts for use in R and R
Markdown documents.

Work on this package was part-sponsored by [Hendrik
Feddersen](//github.com/Hendrik147), a prominent HR Analytics advocate.

## Installations

Install {ibmsunburst} from GitHub

``` r
# install.packages("remotes")
remotes::install_gitub("jumpingrivers/imbsunburst")
```

## Example

Below we input the path to a JSON file corresponding to the output of
[IBM Watson Personality Insights
service](https://www.ibm.com/watson/services/personality-insights/) and
visualize it.

``` r
json_path <- system.file(
  "extdata", "profiles",
  "en_v2.json", package = "ibmsunburst"
)

ibmsunburst::ibmsunburst(json = json_path, version = "v2")
```

![](man/figures/sunburst-1.png)<!-- -->

You can use the function on a list, on JSON or on a filepath, making it
quite handy for integration in your workflow.

There is no R wrapper for the [IBM Personality Insight
API](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=SSTTDS_contcd/com.ibm.ace.icp.doc/localconn_ibmwatsonpi.html)
itself yet, but you could use it with {httr}, as shown in a very short
example in the vignette.

### Dev notes

[Kent Russell](https://github.com/timelyportfolio) added some
documentation of the changes that he made to the source
[sunburst-chart](https://github.com/personality-insights/sunburst-chart)
JavaScript library. Find them [here](inst/dev_notes.md).

## Code of Conduct

Please note that the ibmsunburst project is released with a [Contributor
Code of
Conduct](https://contributor-covenant.org/version/2/0/CODE_OF_CONDUCT.html).
By contributing to this project, you agree to abide by its terms.
