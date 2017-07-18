;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1018.3168 536.117248c0 26.243072-21.274624 47.533056-47.532032 47.533056-12.5184 0-23.829504-4.952064-32.323584-12.844032l-0.108544 0.094208L512.507904 145.062912l0.016384-0.01536-1.220608-1.159168L85.224448 569.972736l-0.03072-0.029696c-8.571904 8.477696-20.361216 13.708288-33.374208 13.708288-26.258432 0-47.532032-21.289984-47.532032-47.533056 0-13.461504 5.615616-25.623552 14.606336-34.25792l458.151936-458.15808c8.64768-9.00608 20.779008-14.60736 34.25792-14.60736l0.013312 0c0.835584 0 1.672192 0.03072 2.506752 0.062464 0.141312 0.014336 0.264192 0.03072 0.403456 0.03072 0.71168 0.04608 1.424384 0.108544 2.13504 0.171008 0.029696 0.014336 0.09216 0.014336 0.140288 0.014336 11.620352 1.268736 21.986304 6.746112 29.568 14.854144l0.03072-0.03072 187.020288 187.035648 0-43.695104c0-26.258432 21.275648-47.532032 47.535104-47.532032 26.25536 0 47.532032 21.2736 47.532032 47.532032l0 138.761216L1005.581312 503.686144l-0.12288 0.123904C1013.380096 512.288768 1018.3168 523.584512 1018.3168 536.117248M923.250688 615.33696l0 142.599168 0 63.377408 0 126.753792c0 26.241024-21.274624 47.533056-47.532032 47.533056l-95.064064 0L780.654592 615.33696 590.522368 615.33696l0 380.263424L146.883584 995.600384c-26.257408 0-47.533056-21.292032-47.533056-47.533056L99.350528 821.313536l0-63.377408L99.350528 615.33696l411.952128-411.956224L923.250688 615.33696zM432.079872 615.33696 241.948672 615.33696l0 190.1312L432.079872 805.46816 432.079872 615.33696z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M797.480428 538.099425c-56.844659-61.842487-100.67798-112.868627-156.011216-171.612543-41.37534 45.454238-99.235119 107.472733-184.984085 111.435998C378.68111 481.519802 315.491952 446.431655 278.189372 397.688511c68.441788-73.454966 140.138714-143.649678 209.500455-216.185714-58.963926-45.5228-119.348202-101.525278-227.329519-91.37715-54.104245 5.083785-111.340831 32.085766-142.638651 69.089541C11.976264 284.243763 85.735152 466.479247 184.581414 540.327162c37.4571-23.429619 83.392292-100.770078 142.637628-80.233346 26.547633 9.200546 50.169633 36.347836 49.03274 73.548086 50.760081-8.408507 82.029248 21.971407 80.233346 73.547063 51.66366-7.640004 82.810031 24.026206 82.46313 75.776847 61.764716-5.432733 86.872556 50.54007 64.632019 102.521978 19.577894 36.918841 90.5012 32.654724 84.691891-13.372565-1.588171-12.595876-24.816199-31.580253-35.659151-44.574195-26.89965-32.237215-50.947346-57.95597-75.776847-86.919628-12.346189-14.404058-32.174793-32.032554-26.745131-51.261501 23.168676-7.834432 35.917024 19.028379 49.030693 33.431414 13.469779 14.790868 28.078499 29.116131 42.346457 44.574195 17.869996 19.363 58.667168 86.451978 100.293217 75.776847 13.485129-3.457752 26.75741-27.377534 24.515347-42.345434-1.641383-10.960633-25.478278-32.903388-35.659151-44.574195-27.358091-31.361265-48.608068-53.038984-75.776847-84.692914-12.065803-14.055111-48.916083-50.54007-22.286586-57.945737 19.796882-5.507434 75.040067 63.203484 84.690868 73.547063 28.114314 30.137391 50.89311 71.624271 80.234369 80.233346 41.187051 12.08627 65.22656-30.891568 51.260477-71.317279C842.355475 577.558112 813.042869 555.030026 797.480428 538.099425z"  ></path>' +
    '' +
    '<path d="M324.991304 393.232013c29.692253 32.624025 76.358085 53.111638 131.494846 49.031716 86.126566-6.375198 140.274814-81.729419 184.984085-127.037325 67.026556 74.123184 130.237203 152.068418 200.585411 222.87302 51.885717-58.800197 117.26475-121.717156 115.894543-227.330542-1.521656-117.206422-101.985766-208.02894-209.500455-216.185714C592.949148 82.784448 511.812223 201.953571 438.656063 275.108708 398.537344 315.227428 359.503329 353.850074 324.991304 393.232013z"  ></path>' +
    '' +
    '<path d="M280.417109 598.273922c22.26305-22.26305 68.223824-47.728024 62.403259-86.920652-3.137457-21.134343-26.542516-35.512818-55.716976-26.744107-19.47761 17.203824-124.654045 103.818507-127.038348 135.952368-1.836835 24.781406 16.83134 39.145555 35.660174 40.11565C230.36925 662.464897 257.187035 621.503996 280.417109 598.273922z"  ></path>' +
    '' +
    '<path d="M362.879216 678.507268c26.63359-26.632567 61.654198-51.155077 60.176544-80.233346-1.355881-26.672476-24.562419-39.096437-51.261501-33.43039-22.632463 4.800329-53.020564 41.075511-75.775824 64.632019-18.266016 18.910699-58.414411 53.716412-57.947783 75.776847 0.25992 12.256138 11.694343 31.828916 26.745131 35.660174C308.140521 751.938698 335.4454 705.942107 362.879216 678.507268z"  ></path>' +
    '' +
    '<path d="M447.57213 752.055354c21.98778-21.988804 64.526619-49.748031 62.402235-82.462107-1.876744-28.958542-25.740244-34.604122-42.34441-33.431414-34.041304 2.40477-58.075697 40.246633-82.46313 64.633043-17.623379 17.623379-60.030212 51.219545-60.176544 75.776847-0.118704 20.160155 17.244756 37.748742 40.116673 37.886889C396.484591 814.648948 422.677137 776.950348 447.57213 752.055354z"  ></path>' +
    '' +
    '<path d="M581.294714 731.996506c-8.083096-19.457144-32.6844-19.775392-44.575218-17.830087-26.209942 4.287653-55.388495 42.017976-78.005608 64.633043-19.742646 19.742646-59.654658 46.771233-57.94676 78.004585 0.899486 16.411785 16.822131 34.425044 35.660174 35.660174 35.869952 2.355651 67.431785-42.915415 89.148389-64.632019C545.249777 808.157093 598.728782 773.956154 581.294714 731.996506z"  ></path>' +
    '' +
    '<path d="M579.065953 810.001091c-4.198625 16.244986-62.272275 53.510728-60.175521 66.862827 2.746554 17.494443 49.599651 17.277502 62.403259 8.915044C605.4693 869.992417 607.132172 816.163441 579.065953 810.001091z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-note" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M824.690424 964.544646 199.309576 964.544646c-64.761535 0-117.259636-52.509737-117.259636-117.290667L82.049939 243.207758c0-64.775758 52.499394-117.288081 117.259636-117.288081L218.853495 125.919677l0 43.426909c-73.680162 0.554667-93.685657 20.128323-93.685657 96.572768l0 558.629495c0 75.148929 19.119838 96.685253 96.708525 96.685253l580.248566 0c75.169616 0 96.708525-20.323556 96.708525-96.685253L898.833455 265.919354c0-76.45996-18.84703-96.027152-93.685657-96.575354L805.147798 125.919677l19.543919 0c64.758949 0 117.258343 52.512323 117.258343 117.288081l0 604.046222C941.948768 912.034909 889.449374 964.544646 824.690424 964.544646zM718.966303 770.894869 305.032404 770.894869c-16.329697 0-29.568-9.536646-29.568-21.299717 0-11.765657 13.238303-21.302303 29.568-21.302303l413.933899 0c16.329697 0 29.568 9.536646 29.568 21.302303C748.534303 761.358222 735.296 770.894869 718.966303 770.894869zM718.966303 599.241697 305.032404 599.241697c-16.329697 0-29.568-9.647838-29.568-21.551838 0-11.898828 13.238303-21.546667 29.568-21.546667l413.933899 0c16.329697 0 29.568 9.647838 29.568 21.546667C748.534303 589.593859 735.296 599.241697 718.966303 599.241697zM718.966303 427.084283 305.032404 427.084283c-16.329697 0-29.568-9.64396-29.568-21.546667 0-11.901414 13.238303-21.546667 29.568-21.546667l413.933899 0c16.329697 0 29.568 9.646545 29.568 21.546667C748.534303 417.440323 735.296 427.084283 718.966303 427.084283zM717.20404 252.496162c-16.190061 0-29.315879-12.962909-29.315879-28.956444L687.888162 88.414384c0-15.992242 13.125818-28.95903 29.315879-28.95903s29.314586 12.966788 29.314586 28.95903l0 135.12404C746.517333 239.533253 733.392808 252.496162 717.20404 252.496162zM394.74101 125.919677l234.51798 0 0 43.315717L394.74101 169.235394 394.74101 125.919677zM306.797253 252.496162c-16.191354 0-29.315879-12.962909-29.315879-28.956444L277.481374 88.414384c0-15.992242 13.124525-28.95903 29.315879-28.95903 16.190061 0 29.314586 12.966788 29.314586 28.95903l0 135.12404C336.111838 239.533253 322.987313 252.496162 306.797253 252.496162z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M952.424947 1024l-0.255968-6.3992c-8.062992-207.910011-201.382827-370.769654-440.136983-370.769654-238.690164 0-431.946007 162.859643-440.072991 370.769654l-0.255968 6.3992L0.031996 1024l0.255968-6.847144c1.535808-45.178353 10.87864-89.524809 27.772528-132.015498 17.981752-45.178353 44.218473-87.477065 77.942257-125.616298 33.403825-37.819273 73.398825-70.583177 118.705162-97.331834 46.138233-27.260592 96.627922-47.610049 150.125234-60.536433l27.132608-6.655168L376.624922 582.903137C325.879265 558.650169 282.87664 520.446944 252.224472 472.388951 220.740407 422.987127 204.102487 365.458318 204.102487 306.137733c0-81.589801 30.844144-158.380202 86.837145-216.036995 55.993001-57.720785 130.543682-89.524809 209.765779-89.524809s153.708786 31.804024 209.701787 89.524809c55.993001 57.720785 86.837145 134.447194 86.837145 216.036995 0 58.040745-15.998 114.417698-46.330209 162.987627-29.308336 47.162105-70.775153 85.301337-119.92101 110.32221l-25.212848 12.7984 27.51656 5.823272c109.810274 23.229096 209.189851 78.646169 279.83702 156.012498 35.195601 38.587177 62.648169 81.525809 81.461817 127.728034 17.661792 43.450569 27.51656 88.948881 29.11636 135.27909l0.255968 6.847144L952.424947 1023.936008 952.424947 1024zM500.705412 50.745657c-136.55893 0-247.649044 114.609674-247.649044 255.392076 0 140.846394 111.090114 255.392076 247.649044 255.392076s247.585052-114.609674 247.585052-255.392076C748.290464 165.291339 637.264342 50.745657 500.705412 50.745657L500.705412 50.745657zM500.705412 50.745657"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-d-arrow-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M67.969 562.046c0 23.955 19.441 43.396 43.396 43.396 10.773 0 20.33-4.346 27.937-10.86l0.425 0.425 2.235-2.235c0.044-0.044 0.067-0.063 0.112-0.106l358.336-358.338c6.256-6.239 16.377-6.239 22.61 0l360.685 360.679 0.658-0.659c7.647 6.685 17.356 11.093 28.3 11.093 23.935 0 43.374-19.441 43.374-43.396 0-15.289-8.389-28.084-20.355-35.812-0.724-1.344-0.576-2.983-1.705-4.112l-410.958-410.948c-6.234-6.244-16.354-6.244-22.61 0l-410.95 410.949c-1.279 1.279-1.172 3.108-1.916 4.641-11.522 7.794-19.571 20.336-19.571 35.283z"  ></path>' +
    '' +
    '<path d="M67.969 874.116c0 23.955 19.441 43.394 43.396 43.394 10.773 0 20.33-4.342 27.937-10.855l0.425 0.425 2.235-2.235c0.044-0.045 0.067-0.065 0.112-0.109l358.336-358.339c6.256-6.239 16.377-6.239 22.61 0l360.685 360.684 0.658-0.66c7.647 6.685 17.356 11.091 28.3 11.091 23.935 0 43.374-19.439 43.374-43.394 0-15.289-8.389-28.087-20.355-35.815-0.724-1.341-0.576-2.98-1.705-4.109l-410.958-410.951c-6.234-6.239-16.354-6.239-22.61 0l-410.95 410.953c-1.279 1.277-1.172 3.107-1.916 4.641-11.522 7.794-19.571 20.334-19.571 35.282z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M956.031 461.954c0-23.955-19.441-43.396-43.396-43.396-10.773 0-20.33 4.346-27.937 10.86l-0.425-0.425-2.235 2.235c-0.044 0.044-0.067 0.063-0.112 0.106l-358.336 358.338c-6.256 6.239-16.377 6.239-22.609 0l-360.685-360.679-0.659 0.659c-7.646-6.685-17.355-11.093-28.298-11.093-23.935 0-43.374 19.441-43.374 43.396 0 15.289 8.389 28.084 20.355 35.812 0.726 1.344 0.576 2.983 1.705 4.112l410.958 410.948c6.233 6.244 16.353 6.244 22.609 0l410.951-410.949c1.279-1.279 1.172-3.108 1.916-4.641 11.522-7.794 19.57-20.336 19.57-35.283zM956.031 149.884c0-23.955-19.441-43.394-43.396-43.394-10.773 0-20.33 4.345-27.937 10.857l-0.425-0.425-2.235 2.235c-0.044 0.045-0.067 0.063-0.112 0.109l-358.337 358.338c-6.256 6.239-16.377 6.239-22.609 0l-360.685-360.683-0.659 0.659c-7.646-6.685-17.355-11.091-28.298-11.091-23.935 0-43.374 19.439-43.374 43.394 0 15.29 8.389 28.087 20.355 35.815 0.726 1.341 0.576 2.98 1.705 4.109l410.959 410.951c6.233 6.239 16.353 6.239 22.609 0l410.951-410.951c1.279-1.277 1.172-3.108 1.916-4.641 11.522-7.794 19.57-20.336 19.57-35.283z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kaola" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.15193 687.986896c0 162.253557 0 295.603372-293.809581 293.784196h-5.381375c-293.784196 20.163237-293.784196-131.530639-293.784197-293.784196v-4.789086c0-162.253557 131.530639-293.784196 293.784197-293.784197h5.381375c162.262018 0 293.80958 131.530639 293.809581 293.784197v4.789086z" fill="#8C8B88" ></path>' +
    '' +
    '<path d="M750.536251 689.33224c0 161.432812 66.615679 290.97505-219.79874 303.5739-287.565154 16.922565-219.79874-142.141088-219.798741-303.5739v-4.763703c0-161.41589 97.507822-292.269627 217.793417-292.269626h3.985264c120.302517 0 217.8188 130.853737 217.8188 292.269626v4.763703z" fill="#E2E2E2" ></path>' +
    '' +
    '<path d="M420.563149 803.91493c39.040358 65.43956 41.485669 170.367927-18.420213 206.091462-59.89742 35.748919-159.486717-11.236583-198.527076-76.676144-39.040358-65.448022-53.720684-120.463282 37.779628-183.212154 77.539195-53.162239 140.118841-11.651186 179.167661 53.796836z" fill="#9D9D9D" ></path>' +
    '' +
    '<path d="M428.16138 818.079117c35.300471 59.16975 33.261302 156.584497-26.636117 192.316494-59.905881 35.731997-155.002238-3.714503-190.302709-62.901175-35.308933-59.161289-47.281648-109.683608 44.548653-171.857113 77.826878-52.688407 137.07278-16.744878 172.390173 42.441794z" fill="#8C8B88" ></path>' +
    '' +
    '<path d="M642.231833 803.91493c-39.040358 65.43956-41.485669 170.367927 18.420212 206.091462 59.89742 35.748919 159.486717-11.236583 198.527076-76.676144 39.040358-65.448022 53.720684-120.463282-37.779627-183.212154-77.539195-53.162239-140.11038-11.651186-179.167661 53.796836z" fill="#9D9D9D" ></path>' +
    '' +
    '<path d="M634.642062 818.079117c-35.300471 59.16975-33.261302 156.584497 26.636118 192.316494 59.905881 35.731997 155.002238-3.714503 190.302709-62.901175 35.308933-59.161289 47.281648-109.683608-44.548653-171.857113-77.826878-52.688407-137.07278-16.744878-172.390174 42.441794z" fill="#8C8B88" ></path>' +
    '' +
    '<path d="M819.140331 176.476973m-176.476973 0a176.476973 176.476973 0 1 0 352.953946 0 176.476973 176.476973 0 1 0-352.953946 0Z" fill="#9D9D9D" ></path>' +
    '' +
    '<path d="M204.851208 176.476973m-176.468512 0a176.468512 176.468512 0 1 0 352.937023 0 176.468512 176.468512 0 1 0-352.937023 0Z" fill="#9D9D9D" ></path>' +
    '' +
    '<path d="M80.58881 238.625094a132.368306 125.150832 0 1 0 264.736613 0 132.368306 125.150832 0 1 0-264.736613 0Z" fill="#E2E2E2" ></path>' +
    '' +
    '<path d="M684.783623 238.625094a132.368306 125.150832 0 1 0 264.736613 0 132.368306 125.150832 0 1 0-264.736613 0Z" fill="#E2E2E2" ></path>' +
    '' +
    '<path d="M204.851208 323.305612c0-158.056761 141.396495-286.177503 315.817376-286.177504C695.097927 37.128108 836.485961 165.248851 836.485961 323.305612s-78.241481 286.177503-315.817377 286.177503c-253.63541 0-315.817376-128.120743-315.817376-286.177503z" fill="#9D9D9D" ></path>' +
    '' +
    '<path d="M359.794216 337.452876m-34.471265 0a34.471266 34.471266 0 1 0 68.942531 0 34.471266 34.471266 0 1 0-68.942531 0Z" fill="#434849" ></path>' +
    '' +
    '<path d="M361.241096 330.793847a13.021914 13.021914 0 1 1 26.026905 0 13.013453 13.013453 0 1 1-26.026905 0z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M677.134624 337.452876m-34.471266 0a34.471266 34.471266 0 1 0 68.942531 0 34.471266 34.471266 0 1 0-68.942531 0Z" fill="#434849" ></path>' +
    '' +
    '<path d="M678.581503 330.793847a13.030375 13.030375 0 1 1 26.035367 0 13.013453 13.013453 0 1 1-26.035367 0z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M580.430624 469.178125a47.797786 47.797786 0 0 1-47.806247 47.797786h-23.886201a47.797786 47.797786 0 0 1-47.806248-47.797786V350.787858a47.806247 47.806247 0 0 1 47.806248-47.806247h23.886201a47.806247 47.806247 0 0 1 47.806247 47.806247V469.178125z" fill="#434849" ></path>' +
    '' +
    '<path d="M502.146836 490.297487m-7.894376 0a7.894377 7.894377 0 1 0 15.788753 0 7.894377 7.894377 0 1 0-15.788753 0Z" fill="" ></path>' +
    '' +
    '<path d="M538.640349 490.297487m-7.902838 0a7.902838 7.902838 0 1 0 15.805676 0 7.902838 7.902838 0 1 0-15.805676 0Z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M621.911743 1010.869069a13.139792 13.139792 0 0 1-26.270723 0v-81.70948a13.139792 13.139792 0 0 1 26.270723 0v81.70948z" fill="#E7831E" ></path>' +
    '' +
    '<path d="M677.713772 974.931783a13.130931 13.130931 0 1 1-17.818019 19.297684l-60.02838-55.429896a13.130931 13.130931 0 1 1 17.818018-19.297685l60.028381 55.429897z" fill="#E7831E" ></path>' +
    '' +
    '<path d="M539.821272 974.931783a13.130931 13.130931 0 1 0 17.826878 19.297684l60.028381-55.429896a13.130931 13.130931 0 1 0-17.818019-19.297685l-60.03724 55.429897z" fill="#E7831E" ></path>' +
    '' +
    '<path d="M430.228498 1010.869069a13.139792 13.139792 0 0 1-26.270723 0v-81.70948a13.130931 13.130931 0 1 1 26.270723 0v81.70948z" fill="#E7831E" ></path>' +
    '' +
    '<path d="M486.039387 974.931783a13.130931 13.130931 0 1 1-17.826879 19.297684l-60.02838-55.429896a13.130931 13.130931 0 1 1 17.818018-19.297685l60.037241 55.429897z" fill="#E7831E" ></path>' +
    '' +
    '<path d="M348.138027 974.931783a13.130931 13.130931 0 1 0 17.826878 19.297684l60.028381-55.429896a13.130931 13.130931 0 1 0-17.818019-19.297685l-60.03724 55.429897z" fill="#E7831E" ></path>' +
    '' +
    '<path d="M800.818468 652.45312c0 156.596546-126.941197 283.528882-283.528882 283.528883H506.719275c-156.587686 0-283.528882-126.932337-283.528883-283.528883v-321.185062c0-156.596546 126.941197-283.528882 283.528883-283.528882h10.570311c156.587686 0 283.528882 126.932337 283.528882 283.528882v321.185062z" fill="#FDBD2C" ></path>' +
    '' +
    '<path d="M506.719275 47.739176S635.326204 48.235351 657.503478 0c0 0 17.064895 19.669816 0 47.739176 0 0 1.497387 10.322223 28.08708 0 0 0 14.778943 5.387049-41.350915 30.01862" fill="#FDBD2C" ></path>' +
    '' +
    '<path d="M687.938532 760.043471c0 97.161804-78.767868 175.929672-175.929672 175.929671-97.170664 0-175.929672-78.776728-175.929671-175.929671v-57.379158c0-97.170664 78.767868-175.938532 175.929671-175.938532 97.170664 0 175.929672 78.776728 175.929672 175.938532v57.379158z" fill="#F4C778" ></path>' +
    '' +
    '<path d="M727.012356 540.627557l36.185374 131.725747a56.705776 56.705776 0 0 0 69.721524 39.667462 56.705776 56.705776 0 0 0 39.658602-69.712664s-8.789395-41.005365-14.708061-53.569238c-14.840965-31.533728-41.581283-59.213235-130.857439-48.111307zM296.987644 540.627557l-36.176513 131.725747a56.705776 56.705776 0 0 1-69.712664 39.667462 56.714637 56.714637 0 0 1-39.676323-69.712664s8.807116-41.005365 14.716921-53.569238c14.840965-31.533728 41.581283-59.213235 130.848579-48.111307z" fill="#F2B02A" ></path>' +
    '' +
    '<path d="M383.596857 355.217388m-35.131 0a35.131001 35.131001 0 1 0 70.262001 0 35.131001 35.131001 0 1 0-70.262001 0Z" fill="#1A1A1A" ></path>' +
    '' +
    '<path d="M383.596857 348.448136a13.263836 13.263836 0 1 1 26.527671 0 13.254975 13.254975 0 1 1-26.527671 0z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M640.403143 355.217388m-35.122141 0a35.12214 35.12214 0 1 0 70.244281 0 35.12214 35.12214 0 1 0-70.244281 0Z" fill="#1A1A1A" ></path>' +
    '' +
    '<path d="M640.412003 348.448136a13.263836 13.263836 0 1 1 26.518811 0 13.263836 13.263836 0 0 1-26.518811 0z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M512 508.455889l-33.50071-58.025958-33.500709-58.025958h134.011698l-33.500709 58.025958z" fill="#E7831E" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-psyduck" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.004049 188.973143a24.293771 24.293771 0 0 1-24.293771-24.293771V24.293771a24.293771 24.293771 0 1 1 48.587541 0v140.385601a24.293771 24.293771 0 0 1-24.29377 24.293771z" fill="#33363A" ></path>' +
    '' +
    '<path d="M486.268848 212.983486a24.261379 24.261379 0 0 1-20.220515-10.794532l-78.031591-116.739665a24.293771 24.293771 0 1 1 40.392443-26.998477l78.031591 116.739665a24.293771 24.293771 0 0 1-20.171928 37.793009zM537.731152 212.983486a24.293771 24.293771 0 0 1-20.171928-37.793009l78.031591-116.739665a24.285673 24.285673 0 1 1 40.392443 26.998477l-78.031591 116.739665a24.261379 24.261379 0 0 1-20.220515 10.794532z" fill="#33363A" ></path>' +
    '' +
    '<path d="M910.494767 562.886663c0 167.432666-178.413451 303.194354-398.490718 303.194354-220.085365 0-398.490718-135.769786-398.490718-303.194354 0-167.465058 178.405353-368.123505 398.490718-368.123505 220.069169 0 398.490718 200.658447 398.490718 368.123505z" fill="#FFF800" ></path>' +
    '' +
    '<path d="M910.494767 562.886663c0 167.432666-178.413451 303.194354-398.490718 303.194354-220.085365 0-398.490718-135.769786-398.490718-303.194354 0-167.465058 178.405353-282.844272 398.490718-282.844272 220.069169 0 398.490718 115.379214 398.490718 282.844272z" fill="#FFD400" ></path>' +
    '' +
    '<path d="M596.862189 472.651501c0 11.296603-37.987359 13.321084-84.85814 13.321085s-84.85814-2.024481-84.85814-13.321085c0-11.280407 37.987359-40.773045 84.85814-40.773045s84.85814 29.500735 84.85814 40.773045z" fill="#FFF800" ></path>' +
    '' +
    '<path d="M910.494767 562.886663c0 167.432666-178.413451 303.194354-398.490718 303.194354-220.085365 0-398.490718-135.769786-398.490718-303.194354 0-167.481254 50.701099 148.515917 398.490718 148.515917s398.490718-315.997171 398.490718-148.515917z" fill="#FFB000" ></path>' +
    '' +
    '<path d="M512.004049 878.227902c-226.426039 0-410.637603-141.462626-410.637603-315.341239 0-172.242833 183.166932-380.27039 410.637603-380.27039s410.637603 208.027557 410.637603 380.27039c0 173.878614-184.211564 315.341239-410.637603 315.341239z m0-671.317858c-214.011922 0-386.343833 194.738865-386.343833 355.976619 0 160.484648 173.311759 291.047469 386.343833 291.047469s386.343833-130.562821 386.343833-291.047469c0-161.237755-172.340008-355.976619-386.343833-355.976619z" fill="#33363A" ></path>' +
    '' +
    '<path d="M381.125409 492.531904a12.146885 12.146885 0 0 1-12.146885-12.146886c0-7.045193-20.139536-19.993773-53.057595-19.993773-32.901863 0-53.049497 12.94858-53.049497 19.993773a12.146885 12.146885 0 0 1-24.29377 0c0-25.249325 33.241976-44.287544 77.343267-44.287543s77.351365 19.038218 77.351365 44.287543a12.146885 12.146885 0 0 1-12.146885 12.146886zM773.275453 492.531904a12.146885 12.146885 0 0 1-12.146885-12.146886c0-7.045193-20.139536-19.993773-53.049497-19.993773s-53.057595 12.94858-53.057595 19.993773a12.146885 12.146885 0 0 1-24.29377 0c0-25.249325 33.250074-44.287544 77.351365-44.287543s77.343267 19.038218 77.343267 44.287543a12.146885 12.146885 0 0 1-12.146885 12.146886z" fill="#33363A" ></path>' +
    '' +
    '<path d="M831.175606 824.0285c0-102.819335-93.717269-136.288053-163.383705-192.02606-116.553413-100.276587-78.250235-164.169203-150.953392-169.157524v-0.348211c-1.692466 0-3.247267 0.064783-4.842558 0.113371-1.587193-0.048588-3.150092-0.113371-4.842558-0.113371v0.348211c-72.703157 4.980223-34.399979 68.880937-150.953392 169.157524-69.666436 55.738008-163.383705 89.206725-163.383705 192.02606 0 166.056019 164.541708 180.5594 314.328999 187.42644v0.332015c1.603389 0 3.222974-0.129567 4.842558-0.161959 1.611487 0.032392 3.231071 0.161958 4.842558 0.161959v-0.332015c149.795389-6.867039 314.345195-21.37042 314.345195-187.42644z" fill="#FFF4C7" ></path>' +
    '' +
    '<path d="M826.438321 825.291776C806.622702 730.489386 728.186215 724.051537 667.791901 675.731227c-116.553413-100.276587-78.250235-164.161105-150.953392-169.157524v-0.348211c-1.692466 0-3.247267 0.080979-4.842558 0.129567-1.587193-0.048588-3.150092-0.129567-4.842558-0.129567v0.348211c-72.703157 4.996419-34.399979 68.880937-150.953392 169.157524-60.394314 48.32031-138.830801 54.758159-158.64642 149.560549 27.816367 123.792957 174.656014 136.223269 309.591714 142.426279v0.332015c1.603389 0 3.222974-0.129567 4.842558-0.170057 1.611487 0.048588 3.231071 0.170056 4.842558 0.170057v-0.332015c134.943797-6.203009 281.791542-18.633322 309.60791-142.426279z" fill="#E0D5A4" ></path>' +
    '' +
    '<path d="M516.838509 1023.925742c-1.101318 0-2.194537-0.048588-3.303952-0.097175l-1.773446-0.064783-1.295668 0.064783c-2.283614 0.105273-4.599621 0.218644-6.672688-0.380602-129.78542-5.951974-323.107148-16.131064-323.107148-199.427563 0-86.137612 60.693937-127.145497 119.387686-166.809126 16.357805-11.045568 33.258172-22.46364 48.547051-34.699602 55.559853-47.818238 74.444211-86.882621 88.234975-115.419704 14.090387-29.160623 25.289815-52.328782 66.613519-56.142904 2.510356-0.842184 5.377021-0.607344 7.968356-0.518267l0.923164 0.032392 0.19435-0.032392c2.648021-0.089077 5.571371-0.307721 8.122217 0.526365 41.194137 3.86271 52.385467 27.006575 66.459658 56.134806 13.790764 28.528985 32.675121 67.601465 88.575088 115.695033 14.956865 11.960633 31.865329 23.378705 48.215036 34.424273 58.69375 39.655531 119.387686 80.671514 119.387686 166.809126 0 183.336988-193.427001 193.475588-323.212421 199.43566a11.393778 11.393778 0 0 1-3.263463 0.46968z m-5.077398-24.447631l2.631825 0.080979c0.615442-0.129567 1.238982-0.210546 1.886817-0.23484 165.634927-7.595852 302.74087-26.026726 302.74087-175.287652 0-73.229522-52.798461-108.900875-108.698427-146.66959-16.746506-11.312799-34.067964-23.022397-50.126147-35.873802-60.054201-51.664752-81.035921-95.085818-94.923859-123.81725-13.904135-28.771922-19.661758-40.67587-49.259669-42.708449a12.786621 12.786621 0 0 1-1.854424-0.267231l-0.825989 0.024294-0.97175 0.032391-1.700564-0.032391-0.850282-0.024294a11.223722 11.223722 0 0 1-1.822033 0.267231c-29.59791 2.032579-35.355534 13.944624-49.259669 42.708449-13.887939 28.731433-34.877757 72.152498-94.599942 123.533823-16.390197 13.126734-33.711656 24.828233-50.458162 36.149131-55.899966 37.768715-108.698427 73.440068-108.698427 146.66959 0 149.269024 137.105943 167.699898 302.740871 175.287653 0.655932 0.024294 1.295668 0.113371 1.919207 0.234839l2.129754-0.072881z" fill="#33363A" ></path>' +
    '' +
    '<path d="M478.438156 617.167044c-4.64011 0-9.069674-2.672315-11.094155-7.182858l-8.923912-19.896598a12.146885 12.146885 0 1 1 22.172115-9.928054l8.923911 19.896598a12.146885 12.146885 0 0 1-11.077959 17.110912zM545.561844 617.167044c-1.660074 0-3.344442-0.340113-4.955929-1.060828-6.12203-2.745196-8.867226-9.936152-6.12203-16.050084l8.923911-19.896598c2.753294-6.12203 9.936152-8.85103 16.050085-6.12203 6.12203 2.745196 8.867226 9.936152 6.12203 16.050084l-8.923912 19.896598c-2.024481 4.510543-6.454045 7.182858-11.094155 7.182858z" fill="#33363A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yingtao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M766.221653 666.66496a20.48 20.48 0 0 1-20.476586-20.33664c-1.7408-250.525013-241.742507-487.307947-244.165974-489.669973a20.473173 20.473173 0 0 1-0.372053-28.95872 20.48 20.48 0 0 1 28.95872-0.372054c2.60096 2.532693 64.395947 63.136427 127.225173 157.14304 58.453333 87.456427 128.33792 221.17376 129.314134 361.5744a20.486827 20.486827 0 0 1-20.33664 20.62336l-0.146774-0.003413z" fill="#1E8C03" ></path>' +
    '' +
    '<path d="M270.37696 678.877867a20.486827 20.486827 0 0 1-20.19328-17.21344c-18.589013-114.920107 18.684587-244.032853 107.78624-373.38112 66.474667-96.494933 137.393493-158.665387 140.38016-161.266347a20.48 20.48 0 0 1 26.89024 30.897493c-3.15392 2.75456-275.606187 243.85536-234.622293 497.210027a20.48 20.48 0 0 1-20.241067 23.753387z" fill="#1E8C03" ></path>' +
    '' +
    '<path d="M502.330027 158.477653c-259.525973 0-350.829227-70.23616-355.252907-73.772373a20.48 20.48 0 0 1 25.473707-32.07168c2.075307 1.573547 124.811947 91.736747 490.161493 56.756907a20.48 20.48 0 0 1 3.908267 40.772266c-61.026987 5.843627-115.63008 8.31488-164.29056 8.31488z" fill="#1E8C03" ></path>' +
    '' +
    '<path d="M852.26496 600.630613c-24.070827 0-80.35328 14.257493-100.068693 14.848-19.698347-1.10592-76.01152-14.848-100.07552-14.848-57.033387 0-107.055787 40.645973-103.273814 123.927894 3.785387 83.27168 54.084267 209.906347 131.601067 224.515413 26.968747 5.74464 110.424747 10.489173 147.565227 0 66.665813-15.28832 123.74016-141.247147 127.522133-224.515413 3.781973-83.28192-46.237013-123.927893-103.2704-123.927894z" fill="#FF1515" ></path>' +
    '' +
    '<path d="M762.395307 975.766187c-31.699627 0-67.781973-2.778453-85.98528-6.61504-90.13248-17.216853-143.878827-152.511147-148.026027-243.667627-2.048-45.090133 10.161493-82.83136 35.304107-109.141333 22.30272-23.343787 53.7088-36.194987 88.429226-36.194987 15.588693 0 39.970133 4.49536 63.546027 8.84736 14.39744 2.655573 29.26592 5.399893 36.78208 5.973333 7.72096-0.416427 23.58272-3.3792 38.94272-6.253226 22.528-4.20864 45.820587-8.567467 60.873387-8.567467 34.720427 0 66.123093 12.854613 88.425813 36.194987 25.142613 26.313387 37.348693 64.054613 35.304107 109.144746-3.843413 84.57216-62.76096 224.525653-142.8992 243.428694-16.387413 4.543147-40.17152 6.85056-70.69696 6.85056zM652.117333 621.110613c-23.425707 0-44.311893 8.35584-58.815146 23.534934-17.227093 18.029227-25.52832 45.339307-23.995734 78.984533 3.433813 75.53024 49.913173 193.068373 114.93376 205.318827l0.474454 0.095573c13.11744 2.792107 44.803413 5.761707 77.684053 5.761707 26.299733 0 47.622827-1.931947 60.050773-5.444267 0.32768-0.088747 0.65536-0.177493 0.989867-0.252587 53.248-12.209493 108.032-126.112427 111.639893-205.482666 1.529173-33.641813-6.76864-60.955307-23.995733-78.984534-14.49984-15.17568-35.386027-23.534933-58.811733-23.534933-11.260587 0-33.621333 4.181333-53.346987 7.871147-19.094187 3.570347-35.584 6.652587-46.11072 6.966613a17.92 17.92 0 0 1-1.764693-0.023893c-9.762133-0.546133-25.081173-3.372373-42.81344-6.64576-19.729067-3.6352-44.274347-8.164693-56.118614-8.164694z" fill="#CC0202" ></path>' +
    '' +
    '<path d="M623.9232 710.929067c-1.283413 22.213973 1.959253 44.858027 10.38336 67.106133" fill="#FF2C2C" ></path>' +
    '' +
    '<path d="M634.309973 798.522027a20.486827 20.486827 0 0 1-19.155626-13.236907c-9.233067-24.39168-13.161813-49.80736-11.677014-75.537067 0.651947-11.29472 10.45504-19.909973 21.62688-19.268266a20.483413 20.483413 0 0 1 19.268267 21.62688c-1.153707 19.95776 1.90464 39.697067 9.089707 58.6752a20.48 20.48 0 0 1-11.902294 26.402133c-2.389333 0.907947-4.840107 1.338027-7.24992 1.338027z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M371.892907 600.630613c-24.07424 0-80.35328 14.257493-100.07552 14.848-19.69152-1.10592-76.004693-14.848-100.07552-14.848-57.033387 0-107.055787 40.645973-103.2704 123.927894 3.785387 83.27168 54.084267 209.906347 131.597653 224.515413 26.968747 5.74464 110.424747 10.489173 147.572053 0 66.665813-15.28832 123.733333-141.247147 127.522134-224.515413 3.781973-83.28192-46.237013-123.927893-103.2704-123.927894z" fill="#FF1515" ></path>' +
    '' +
    '<path d="M282.023253 975.766187c-0.003413 0-0.003413 0 0 0-31.699627 0-67.785387-2.778453-85.988693-6.61504-90.13248-17.216853-143.878827-152.511147-148.022613-243.667627-2.051413-45.090133 10.15808-82.83136 35.300693-109.141333 22.30272-23.343787 53.7088-36.194987 88.429227-36.194987 15.59552 0 39.97696 4.498773 63.556266 8.850773 14.394027 2.655573 29.262507 5.39648 36.77184 5.96992 7.727787-0.416427 23.59296-3.3792 38.95296-6.253226 22.524587-4.212053 45.817173-8.567467 60.869974-8.567467 34.717013 0 66.123093 12.854613 88.425813 36.194987 25.142613 26.313387 37.348693 64.054613 35.300693 109.144746-3.843413 84.57216-62.764373 224.525653-142.895786 243.428694-16.397653 4.54656-40.18176 6.85056-70.700374 6.85056z m-110.2848-354.655574c-23.425707 0-44.315307 8.35584-58.815146 23.534934-17.227093 18.029227-25.524907 45.339307-23.995734 78.984533 3.433813 75.53024 49.916587 193.068373 114.93376 205.318827l0.47104 0.095573c13.120853 2.792107 44.803413 5.761707 77.687467 5.761707 26.299733 0 47.62624-1.931947 60.054187-5.444267 0.32768-0.088747 0.65536-0.177493 0.986453-0.252587 53.244587-12.209493 108.032-126.112427 111.643307-205.482666 1.529173-33.641813-6.76864-60.955307-23.995734-78.984534-14.49984-15.17568-35.386027-23.534933-58.811733-23.534933-11.257173 0-33.61792 4.181333-53.343573 7.871147-19.0976 3.570347-35.587413 6.652587-46.12096 6.966613a17.851733 17.851733 0 0 1-1.76128-0.023893c-9.75872-0.546133-25.074347-3.372373-42.8032-6.642347-19.729067-3.638613-44.27776-8.168107-56.128854-8.168107z" fill="#CC0202" ></path>' +
    '' +
    '<path d="M143.551147 710.929067c-1.286827 22.213973 1.962667 44.858027 10.38336 67.106133" fill="#FF2C2C" ></path>' +
    '' +
    '<path d="M153.93792 798.522027a20.486827 20.486827 0 0 1-19.155627-13.236907c-9.239893-24.405333-13.16864-49.824427-11.677013-75.543893a20.48 20.48 0 0 1 40.891733 2.372266c-1.153707 19.93728 1.90464 39.676587 9.09312 58.668374a20.48 20.48 0 0 1-11.902293 26.402133c-2.389333 0.907947-4.840107 1.338027-7.24992 1.338027z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)