context("creation")

json <- system.file(
  "extdata", "profiles",
  "en_v2.json", package = "ibmsunburst"
)

test_that("handles arguments as expected", {
  # if not given data, generate a nice helpful error message
  expect_error(ibmsunburst())

  # works with file path as our data source
  json_path <- system.file(
    "extdata", "profiles",
    "en_v2.json", package = "ibmsunburst"
  )

  sunviz <- ibmsunburst(json = json_path, version = "v2")
  expect_is(sunviz, "ibmsunburst")
  expect_is(sunviz, "htmlwidget")

  # works with character json as our data source
  sunviz2 <- ibmsunburst(json = jsonlite::read_json(json_path),
                         version = "v2")
  expect_is(sunviz2, "ibmsunburst")
  expect_is(sunviz2, "htmlwidget")

  # works with R list as our data source
  sunviz3 <- ibmsunburst(json = jsonlite::fromJSON(json_path),
                         version = "v2")
  expect_is(sunviz3, "ibmsunburst")
  expect_is(sunviz3, "htmlwidget")

  # checks version and warns if incorrect
  expect_warning(ibmsunburst(json = json_path,
                           version = "sonotaversion"),
                 "Invalid version provided")

})
