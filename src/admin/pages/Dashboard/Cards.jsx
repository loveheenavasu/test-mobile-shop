import React from 'react'

const Cards = () => {
    return (
        <div class="row gutters-10">
                <div class="col-lg-6">
                   <div class="row gutters-10">
                      <div class="col-6">
                         <div class="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                            <div class="px-3 pt-3">
                               <div class="opacity-50">
                                  <span class="fs-12 d-block">Total</span>
                                  Customer
                               </div>
                               <div class="h3 fw-700 mb-3">284</div>
                            </div>
                          
                         </div>
                      </div>
                      <div class="col-6">
                         <div class="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
                            <div class="px-3 pt-3">
                               <div class="opacity-50">
                                  <span class="fs-12 d-block">Total</span>
                                  Order
                               </div>
                               <div class="h3 fw-700 mb-3">1119</div>
                            </div>
                           
                         </div>
                      </div>
                      <div class="col-6">
                         <div class="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                            <div class="px-3 pt-3">
                               <div class="opacity-50">
                                  <span class="fs-12 d-block">Total</span>
                                  Product category
                               </div>
                               <div class="h3 fw-700 mb-3">241</div>
                            </div>
                           
                         </div>
                      </div>
                      <div class="col-6">
                         <div class="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden">
                            <div class="px-3 pt-3">
                               <div class="opacity-50">
                                  <span class="fs-12 d-block">Total</span>
                                  Product brand
                               </div>
                               <div class="h3 fw-700 mb-3">95</div>
                            </div>
                           
                         </div>
                      </div>
                   </div>
                </div>
                <div class="col-lg-6">
                   <div class="row gutters-10">
                      <div class="col-6">
                         <div class="card">
                            <div class="card-header">
                               <h6 class="mb-0 fs-14">Products</h6>
                            </div>
                            <div class="card-body">
                               <div class="chartjs-size-monitor">
                                  <div class="chartjs-size-monitor-expand">
                                     <div class=""></div>
                                  </div>
                                  <div class="chartjs-size-monitor-shrink">
                                     <div class=""></div>
                                  </div>
                               </div>
                               <canvas id="pie-1" class="w-100 chartjs-render-monitor" height="489" style={{display: 'block', width: '103px', height: '163px'}} width="309"></canvas>
                            </div>
                         </div>
                      </div>
                      <div class="col-6">
                         <div class="card">
                            <div class="card-header">
                               <h6 class="mb-0 fs-14">Sellers</h6>
                            </div>
                            <div class="card-body">
                               <div class="chartjs-size-monitor">
                                  <div class="chartjs-size-monitor-expand">
                                     <div class=""></div>
                                  </div>
                                  <div class="chartjs-size-monitor-shrink">
                                     <div class=""></div>
                                  </div>
                               </div>
                               <canvas id="pie-2" class="w-100 chartjs-render-monitor" height="489" width="309" style={{display: 'block', width: '103px', height: '163px'}}></canvas>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
    )
}

export default Cards
