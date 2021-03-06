/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import renderer from "react-test-renderer";

import { Error } from "..";

it("renders Error default correctly", () => {
  const tree = renderer.create(<Error message={"error message"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Error default correctly", () => {
  const tree = renderer
    .create(<Error title={"No results"} message={"error message"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
