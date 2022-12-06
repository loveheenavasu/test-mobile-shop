import React, { useState } from "react";
import CategoriesModal from '../../pages/Search/categorymodal'

const Browse = () => {
   const [modalIsOpen, setIsOpen] = useState(false);

   const openModal = () => setIsOpen(true);
   const closeModal = () => setIsOpen(false);

    return (
        <div class="d-flex align-items-center">
        <CategoriesModal modalIsOpen={modalIsOpen} close={closeModal} />
            {/* {showDrawer && (<MobileFilter close={closeDrawer} />)} */}
        {/* <div class="form-group ml-auto mr-0 w-200px d-none d-xl-block">
           <label class="mb-0 opacity-50">Brands</label>
           <div class="dropdown bootstrap-select form-control form-control-sm aiz-">
              <select class="form-control form-control-sm aiz-selectpicker" data-live-search="true" name="brand" onchange="filter()" tabindex="-98">
                 <option value="">All Brands</option>
                 <option value="Ford">Ford</option>
                 <option value="Chevrolet">Chevrolet</option>
                 <option value="Audi">Audi</option>
                 <option value="Hyundai">Hyundai</option>
                 <option value="Nissan">Nissan</option>
                 <option value="BMW">BMW</option>
              </select>
              <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="All Brands">
                 <div class="filter-option">
                    <div class="filter-option-inner">
                       <div class="filter-option-inner-inner">All Brands</div>
                    </div>
                 </div>
              </button>
              <div class="dropdown-menu ">
                 <div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list"/></div>
                 <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1">
                    <ul class="dropdown-menu inner show" role="presentation"></ul>
                 </div>
              </div>
           </div>
        </div>
        <div class="form-group w-200px ml-0 ml-xl-3">
           <label class="mb-0 opacity-50">Sort by</label>
           <div class="dropdown bootstrap-select form-control form-control-sm aiz-">
              <select class="form-control form-control-sm aiz-selectpicker" name="sort_by" onchange="filter()" tabindex="-98">
                 <option value="newest">Newest</option>
                 <option value="oldest">Oldest</option>
                 <option value="price-asc">Price low to high</option>
                 <option value="price-desc">Price high to low</option>
              </select>
              <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Newest">
                 <div class="filter-option">
                    <div class="filter-option-inner">
                       <div class="filter-option-inner-inner">Newest</div>
                    </div>
                 </div>
              </button>
              <div class="dropdown-menu ">
                 <div class="inner show" role="listbox" id="bs-select-2" tabindex="-1">
                    <ul class="dropdown-menu inner show" role="presentation"></ul>
                 </div>
              </div>
           </div>
        </div> */}
       
        <div class="d-xl-none mr-auto mr-xr-3 ml-0 form-group ">
           Filters :
           <button type="button" class="btn btn-icon p-0" data-toggle="class-toggle" onClick={openModal}>
           <i class="la la-filter la-2x"></i>
           </button>
        </div>
     </div>
    )
}

export default Browse
