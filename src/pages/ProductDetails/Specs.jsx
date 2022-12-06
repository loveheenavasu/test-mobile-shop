import React from 'react'
const Specs = ({ product }) => {
  return (
    <div className="bg-white mb-3 shadow-sm rounded">
      <div className="tab-content pt-0">


        <table className="table table-bordered" style={{ width: '100%', textAlign: "start" }}>
          <tbody>
            <tr>
              <td>Performance</td>
              <td>
                <ul>
                  {product.performance ? product.performance.map((d) => (
                    <li key={d.id}>{d}</li>
                  )) : ''}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Display</td>
              <td>
                <ul>
                  {product.display ? product.display.map((c) => (
                    <li key={c.id}>{c}</li>
                  )) : ''}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>
                <ul>
                  {product.camera ? product.camera.map((f) => (
                    <li key={f.id}>{f}</li>
                  )) : ''}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>
                <ul>
                  {product.battery ? product.battery.map((e) => (
                    <li key={e.id}>{e}</li>
                  )) : ''}
                </ul>
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Specs
