console.log("Hello World!!");
// Data
let dataStore = [
  {
    nameInvoice: "John Smith",
    addressInvoice: "4490 Oak Drive",
    cityInvoice: "Albany,NY 12210",
  },
];

let dataCustomer = [
  {
    // bill to
    nameCustomerBill: "Jessie M Home",
    addressBillTo: "4312 Wood Road",
    cityBillTo: "New York, NY 10031",
    // ship to
    nameCustomerShip: "Jessie M Home",
    addressShipTo: "2019 Redbud Drive",
    cityShipTo: "New York, NY 10011",
  },
];

// InvoiceData
let invoiceData = [
  {
    invoiceText: "INT-001",
    invoiceDate: "11/02/2019",
    poNumber: "2412/2019",
    dueDate: "26/02/2019",
  },
];

// Items
let items = [
  {
    itemName: "Front and rear brake cables",
    itemPrice: 100.0,
    itemQuantity: 1,
  },
  {
    itemName: "New set of pedal arms",
    itemPrice: 25.0,
    itemQuantity: 2,
  },
  {
    itemName: "Labor 3hrs",
    itemPrice: 15.0,
    itemQuantity: 3,
  },
];

//แสดงผล

document.addEventListener("DOMContentLoaded", () => {
  const loadingDiv = document.getElementById("loading");
  let tbody = document.getElementById("itemsToPort");
  let subtotal = 0;

  loadingDiv.style.display = 'flex';

  items.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
                <td>${item.itemQuantity}</td>
                <td class="textLeft">${item.itemName}</td>
                <td class="numberRight">${item.itemPrice.toFixed(2)}</td>
                <td class="numberRight">${(
                  item.itemPrice * item.itemQuantity
                ).toFixed(2)}</td>
            `;
    tbody.appendChild(row);
    subtotal += item.itemPrice * item.itemQuantity;

    loadingDiv.style.display = 'none';
  });

  // รวมราคาสินค้าแต่ไม่รวมภาษี
  let subtotalRow = document.createElement("tr");
  subtotalRow.innerHTML = `
                <td colspan="3" class="totalMain">Subtotal</td>
                <td class="numberRight">${subtotal.toFixed(2)}</td>
            `;
  tbody.appendChild(subtotalRow);
  // ราคาภาษีที่ต้องจ่าย
  let salesTax = subtotal * 0.05;
  let salesTaxRow = document.createElement("tr");
  salesTaxRow.innerHTML = `
            <td colspan="3" class="totalMain">Sales Tax 5%</td>
            <td class="numberRight">${salesTax.toFixed(2)}</td>
        `;
  tbody.appendChild(salesTaxRow);
  // ราคาทั้งหมด
  let total = subtotal + salesTax;
  let totalRow = document.createElement("tr");
  totalRow.innerHTML = `
            <td colspan="3" style="font-weight: bold; font-size: 20px;" class="totalMain">TOTAL</td>
            <td class="totalAmount">$${total.toFixed(2)}</td>
        `;
  tbody.appendChild(totalRow);
  // Store
  document.getElementById("nameInvoice").innerHTML = dataStore[0].nameInvoice;
  document.getElementById("addressInvoice").innerHTML =
    dataStore[0].addressInvoice;
  document.getElementById("cityInvoice").innerHTML = dataStore[0].cityInvoice;

  // Customer Billto
  let nameOfBillTo = document.getElementById("nameBill");
  let addressBillTo = document.getElementById("addressBill");
  let cityBillTo = document.getElementById("cityBill");
  nameOfBillTo.innerHTML = dataCustomer[0].nameCustomerBill;
  addressBillTo.innerHTML = dataCustomer[0].addressBillTo;
  cityBillTo.innerHTML = dataCustomer[0].cityBillTo;

  // Customer Shipto
  let nameOfShipTo = document.getElementById("nameShip");
  let addressShipTo = document.getElementById("addressShip");
  let cityShipTo = document.getElementById("cityShip");
  nameOfShipTo.innerHTML = dataCustomer[0].nameCustomerShip;
  addressShipTo.innerHTML = dataCustomer[0].addressShipTo;
  cityShipTo.innerHTML = dataCustomer[0].cityShipTo;

  // invoice data
  let invoiceText = document.getElementById("invoiceText");
  let invoiceDate = document.getElementById("invoiceDate");
  let poNumber = document.getElementById("poNumber");
  let dueDate = document.getElementById("dueDate");
  invoiceText.innerHTML = invoiceData[0].invoiceText;
  invoiceDate.innerHTML = invoiceData[0].invoiceDate;
  poNumber.innerHTML = invoiceData[0].poNumber;
  dueDate.innerHTML = invoiceData[0].dueDate;
});
