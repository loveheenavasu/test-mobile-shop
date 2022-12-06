import React from 'react'

function ShippingDetails() {
  return (
    <div>
        <table className="shippingTable table table-borderless my-4">
              <tbody>
                <tr style={{ borderBottom: "rgba(0,0,0,.3) dashed", borderWidth: 1 + "px", padding: 5 + "px" }}>
                  <td class="shippingHeading" style={{ whiteSpace: "nowrap" }}>Door Delivery<br></br>
                    <img src="https://image.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-260nw-1202545720.jpg" width='50' height='50' /> </td>

                  <td className="shippingDetails">
                    <p className="detailText">Free delivery on all eligible items.Normal delivery is between 15-30 minutes in Kampala and suburbs.</p>

                  </td>
                </tr>
                <tr style={{ borderBottom: "rgba(0,0,0,.3) dashed", borderWidth: 1 + "px", padding: 5 + "px" }}>
                  <td class="shippingHeading" style={{ whiteSpace: "nowrap" }}>Pickup Station<br></br>
                    <i class="bi bi-geo-fill text-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                    </svg></i></td>
                  <td className="shippingDetails">
                    <p className="detailText">Along Kampala rd, opposite City Square , at City Plaza, Basement 08.</p>
                  </td>
                </tr>
                <tr style={{ padding: 5 + "px" }}>
                  <td class="shippingHeading" style={{ whiteSpace: "nowrap" }}>Return Policy<br></br>
                    <i class="bi bi-arrow-counterclockwise"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg></i>
                  </td>

                  <td className="shippingDetails" >
                    <p className="detailText">Returns should be made to mainstore , within 48hrs and are covered with money Back guarantee.</p>
                  </td>
                </tr>

              </tbody>
            </table>
    </div>
  )
}

export default ShippingDetails