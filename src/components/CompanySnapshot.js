import React from "react"
import Styled from "styled-components"
import { colors } from "../utils/presets"

const SnapshotContainer = Styled.section`
  background-color: inherit;
  margin-top: 10px;
  border-style: none none solid solid;
  border-color: ${colors.textRed};
  strong { text-transform: uppercase; }
  .row {
    width: 90%;
    max-width: 800px;
    margin: auto;
  }
  .column {
    float: left;
    width: 50%;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
`

export default () =>
  <SnapshotContainer>
    <div className="row">
      <div className="column">
        <p>
          <strong>Bonding capacity: </strong><br/>
          $15 Million per project<br/>
          $35 Million aggregate
        </p>
        <p>
          <strong>FEDERAL ID</strong> 34-1922987<br/>
          <strong>CAGE CODE</strong> 3V7Z3<br/>
          <strong>DUNS</strong> 146755603<br/>
        </p>
      </div>
      <div className="column">
        <p>
          <strong>NAICS Codes: </strong><br/>
          236220, 236115, 236116, 236210, 237110, 237120, 237130, 237210, 237310, 237990, 238110, 238160, 238190, 238210, 238220, 238290, 238330, 238350, 238910, 238990, 562211
        </p>
      </div>
    </div>
  </SnapshotContainer>
