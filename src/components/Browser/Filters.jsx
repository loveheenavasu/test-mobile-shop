import React from 'react'

const Filters = () => {
    return (
        <div class="aiz-filter-sidebar collapse-sidebar-wrap sidebar-xl sidebar-right z-1035">
                       <div class="overlay overlay-fixed dark c-pointer" data-toggle="class-toggle" data-target=".aiz-filter-sidebar" data-same=".filter-sidebar-thumb"></div>
                       <div class="collapse-sidebar c-scrollbar-light text-left">
                          <div class="d-flex d-xl-none justify-content-between align-items-center pl-3 border-bottom">
                             <h3 class="h6 mb-0 fw-600">Filters</h3>
                             <button type="button" class="btn btn-sm p-2 filter-sidebar-thumb" data-toggle="class-toggle" data-target=".aiz-filter-sidebar">
                             <i class="las la-times la-2x"></i>
                             </button>
                          </div>
                          <div class="bg-white shadow-sm rounded mb-3">
                             <div class="fs-15 fw-600 p-3 border-bottom">
                                Categories
                             </div>
                             <div class="p-3">
                                <ul class="list-unstyled">
                                   <li class="mb-2">
                                      <a class="text-reset fs-14 fw-600" href="#">
                                      <i class="las la-angle-left"></i>
                                      All Categories
                                      </a>
                                   </li>
                                   <li class="mb-2">
                                      <a class="text-reset fs-14 fw-600" href="#">
                                      <i class="las la-angle-left"></i>
                                      Computer &amp; Accessories
                                      </a>
                                   </li>
                                   <li class="ml-4 mb-2">
                                      <a class="text-reset fs-14" href="#">Laptop &amp; Accessories</a>
                                   </li>
                                   <li class="ml-4 mb-2">
                                      <a class="text-reset fs-14" href="https://demo.activeitzone.com/ecommerce/category/Gaming-pc">Gaming pc</a>
                                   </li>
                                   <li class="ml-4 mb-2">
                                      <a class="text-reset fs-14" href="https://demo.activeitzone.com/ecommerce/category/Official-Equipment">Official Equipment</a>
                                   </li>
                                   <li class="ml-4 mb-2">
                                      <a class="text-reset fs-14" href="https://demo.activeitzone.com/ecommerce/category/Components-&amp;-Peripherals">Components &amp; Peripherals</a>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div class="bg-white shadow-sm rounded mb-3">
                             <div class="fs-15 fw-600 p-3 border-bottom">
                                Price range
                             </div>
                             <div class="p-3">
                                <div class="aiz-range-slider">
                                   <div id="input-slider-range" data-range-value-min=" 2.5 " data-range-value-max=" 200000 " class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                                      <div class="noUi-base">
                                         <div class="noUi-connects">
                                            <div class="noUi-connect" style="transform: translate(0.0240002%, 0px) scale(0.0097501, 1);"></div>
                                         </div>
                                         <div class="noUi-origin" style="transform: translate(-999.76%, 0px); z-index: 5;">
                                            <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="2.0" aria-valuemax="2000.0" aria-valuenow="50.0" aria-valuetext="50.00">
                                               <div class="noUi-touch-area"></div>
                                            </div>
                                         </div>
                                         <div class="noUi-origin" style="transform: translate(-990.01%, 0px); z-index: 6;">
                                            <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="50.0" aria-valuemax="200000.0" aria-valuenow="2000.0" aria-valuetext="2000.00">
                                               <div class="noUi-touch-area"></div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div class="row mt-2">
                                      <div class="col-6">
                                         <span class="range-slider-value value-low fs-14 fw-600 opacity-70" data-range-value-low="50" id="input-slider-range-value-low">50.00</span>
                                      </div>
                                      <div class="col-6 text-right">
                                         <span class="range-slider-value value-high fs-14 fw-600 opacity-70" data-range-value-high="2000" id="input-slider-range-value-high">2000.00</span>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div class="bg-white shadow-sm rounded mb-3">
                             <div class="fs-15 fw-600 p-3 border-bottom">
                                Filter by color
                             </div>
                             <div class="p-3">
                                <div class="aiz-radio-inline">
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="AliceBlue">
                                   <input type="radio" name="color" value="#F0F8FF" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #F0F8FF;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Black">
                                   <input type="radio" name="color" value="#000000" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #000000;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="DarkGray">
                                   <input type="radio" name="color" value="#A9A9A9" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #A9A9A9;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Silver">
                                   <input type="radio" name="color" value="#C0C0C0" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #C0C0C0;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="White">
                                   <input type="radio" name="color" value="#FFFFFF" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #FFFFFF;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Blue">
                                   <input type="radio" name="color" value="#0000FF" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #0000FF;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Red">
                                   <input type="radio" name="color" value="#FF0000" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #FF0000;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Gold">
                                   <input type="radio" name="color" value="#FFD700" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #FFD700;"></span>
                                   </span>
                                   </label>
                                   <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Gray">
                                   <input type="radio" name="color" value="#808080" onchange="filter()"/>
                                   <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                   <span class="size-30px d-inline-block rounded" style="background: #808080;"></span>
                                   </span>
                                   </label>
                                </div>
                             </div>
                          </div>
                          <div class="bg-white shadow-sm rounded mb-3">
                             <div class="fs-15 fw-600 p-3 border-bottom">
                                Filter by Sizes
                             </div>
                             <div class="p-3">
                                <div class="aiz-checkbox-list">
                                   <label class="aiz-checkbox">
                                   <input type="checkbox" name="attribute_4[]" value="13 inch" onchange="filter()"/>
                                   <span class="aiz-square-check"></span>
                                   <span>13 inch</span>
                                   </label>
                                   <label class="aiz-checkbox">
                                   <input type="checkbox" name="attribute_4[]" value="15 inch" onchange="filter()"/>
                                   <span class="aiz-square-check"></span>
                                   <span>15 inch</span>
                                   </label>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
    )
}

export default Filters
