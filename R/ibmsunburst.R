#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
ibmsunburst <- function(json_data, width = NULL, height = NULL, elementId = NULL) {

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
