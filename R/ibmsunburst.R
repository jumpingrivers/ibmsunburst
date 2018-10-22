#' @title Produce an IBM Sunburst Diagram
#'
#' @description Produce an IBM Sunburst Diagram from a JSON data output from
#' IBM Watson Personality Insights service
#'
#' @import htmlwidgets
#'
#' @param json \code{list} of data or data as \code{JSON} or \code{path} to file with data
#' from IBM Watson Personality Insights service.
#'
#' @param version \code{character} version ('v2', 'v3') of Watson Personality Insights profile.
#'
#' @param width Desired width of widget in pixels
#' @param height Desired height of widget in pixels
#' @param elementId Name to assign to widget
#' @examples
#' json_path <- system.file(
#'   "extdata", "profiles",
#'   "en_v2.json", package = "ibmsunburst"
#' )
#'
#' ibmsunburst(json = json_path, version = "v2")
#'
#' @export
ibmsunburst <- function(
  json = NULL,
  version = c("v2", "v3"),
  width = NULL, height = NULL, elementId = NULL
) {

  # make sure that we have data and provide error with reason if not
  if(is.null(json)) {
    stop(
      "Please provide data through the json argument as a\n JSON character string, file path, or list.",
      call.=FALSE
    )
  }

  # accept JSON string as data
  if( inherits(json, c("character","connection")) ){
    # seems foolish to convert to list and then back to character json
    # but this way we can insure that data is in expected and consistent format
    json = jsonlite::toJSON(
      jsonlite::fromJSON(json, simplifyVector=FALSE),
      auto_unbox = TRUE,
      dataframe = "rows"
    )
  }
  # accept list as data
  if( inherits(json, "list") )  {
    json = jsonlite::toJSON(
      json,
      auto_unbox = TRUE,
      dataframe = "rows"
    )
  }

  # check version to insure "v2", "v3"
  if( !exists("version") || !(version[1] %in% c("v2", "v3"))  ) {
    warning(
      "Invalid version provided, so using default 'v3'.  Version should be either 'v2' or 'v3'.",
      call. = FALSE
    )
    version = "v3"
  } else {
    version = version[1]
  }

  # forward options using x
  x = list(
    data = json,
    version = version
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
