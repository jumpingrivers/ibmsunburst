% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/ibmsunburst-package.r, R/ibmsunburst.R
\docType{package}
\name{ibmsunburst}
\alias{ibmsunburst}
\title{ibmsunburst.}
\usage{
ibmsunburst(
  json = NULL,
  version = c("v2", "v3"),
  width = NULL,
  height = NULL,
  elementId = NULL
)
}
\arguments{
\item{json}{\code{list} of data or data as \code{JSON} or \code{path} to file with data
from IBM Watson Personality Insights service.}

\item{version}{\code{character} version ('v2', 'v3') of Watson Personality Insights profile.}

\item{width}{Desired width of widget in pixels}

\item{height}{Desired height of widget in pixels}

\item{elementId}{Name to assign to widget}
}
\description{
Produce an IBM Sunburst Diagram from a JSON data output from
IBM Watson Personality Insights service
}
\examples{
json_path <- system.file(
  "extdata", "profiles",
  "en_v2.json", package = "ibmsunburst"
)

ibmsunburst(json = json_path, version = "v2")

}
