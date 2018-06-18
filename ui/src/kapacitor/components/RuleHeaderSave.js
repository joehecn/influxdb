import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

const RuleHeaderSave = ({onSave, validationError}) => (
  <Fragment>
    {validationError ? (
      <button
        className="btn btn-success btn-sm disabled"
        data-for="save-kapacitor-tooltip"
        data-tip={validationError}
      >
        Save Rule
      </button>
    ) : (
      <button className="btn btn-success btn-sm" onClick={onSave}>
        Save Rule
      </button>
    )}
    <ReactTooltip
      id="save-kapacitor-tooltip"
      effect="solid"
      html={true}
      place="bottom"
      class="influx-tooltip kapacitor-tooltip"
    />
  </Fragment>
)

const {func, string} = PropTypes

RuleHeaderSave.propTypes = {
  onSave: func.isRequired,
  validationError: string.isRequired,
}

export default RuleHeaderSave
