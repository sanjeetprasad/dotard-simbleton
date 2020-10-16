export const Business = (businessObject) => {
    return `
        <section class="business">
             <h1>Active Businesses</h1>
            <h2 class="name">${businessObject.companyName}</h2>
            <div class="full__address">
                 ${businessObject.addressFullStreet}<br>
                 ${businessObject.addressCity}
                 ${businessObject.addressStateCode}
                 ${businessObject.addressZipCode}
            </div>
        </section>
    `
}