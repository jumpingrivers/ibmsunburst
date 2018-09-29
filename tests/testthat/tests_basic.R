context("creation")

json <- system.file(
  "extdata", "profiles",
  "en_v2.json", package = "ibmsunburst"
)

test_that("handles arguments as expected", {
  # if not given data, generate a nice helpful error message
  expect_error(ibmsunburst())

  # works with file path as our data source

  # works with character json as our data source

  # works with R list as our data source

  # checks version and warns if incorrect

})
