import React from 'react'

const TVSpecs = ({ product }) => {
    return (
        <div className="bg-white mb-3 shadow-sm rounded">
            <div className="nav border-bottom aiz-nav-tabs">
                <a href="#tab_default_1" data-toggle="tab" className="p-3 fs-16 fw-600 text-reset show active">Key Specifications</a>
            </div>

            <div className="tab-content pt-0">
                <div className="tab-pane fade active show">
                    <div className="">
                        <div className="mw-100 overflow-hidden text-left">
                            <p><br /></p>
                            <table className="table table-bordered" style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td>Key Specs</td>
                                        <td>
                                            <ul>
                                                {product.tv ? product.tv.map((d) => (
                                                    <li key={d.id}>{d}</li>
                                                )) : ''}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TVSpecs
