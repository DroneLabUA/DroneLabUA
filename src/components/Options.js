import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Options = ({ options }) => (
      <div class="tabs is-toggle">
        <ul>
          {options.map((option) => (
          <li key={v4()}>
            <a>
              <span>{option.optionTitle}<br/>{option.price}</span>
            </a>
          </li>
          ))}
        </ul>
      </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      optionTitle: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default Options;
