#' @title Produce an IBM Sunburst Diagram
#'
#' @description Produce an IBM Sunburst Diagram from a JSON data output from
#' IBM Watson Personality Insights service
#'
#' @import htmlwidgets
#'
#' @param json_path Path to JSON data (IBM Watson Personality Insights service)
#'
#' @examples
#' json_path <- system.file("extdata", "profiles",
#'                          "en_v2.json", package = "ibmsunburst")
#'
#' @export
ibmsunburst <- function(json_path, width = NULL, height = NULL, elementId = NULL) {

  # read json_data
  json_data <- jsonlite::read_json(json_path)

  # forward options using x
  x = list(
    data=json_data
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'ibmsunburst',
    x,
    width = width,
    height = height,
    package = 'ibmsunburst',
    elementId = elementId
  )
}

#' Shiny bindings for ibmsunburst
#'
#' Output and render functions for using ibmsunburst within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a ibmsunburst
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name ibmsunburst-shiny
#'
#' @export
ibmsunburstOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'ibmsunburst', width, height, package = 'ibmsunburst')
}

#' @rdname ibmsunburst-shiny
#' @export
renderIbmsunburst <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, ibmsunburstOutput, env, quoted = TRUE)
}
