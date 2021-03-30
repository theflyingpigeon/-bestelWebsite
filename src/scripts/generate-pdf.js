import jsPDF from 'jspdf'

function genaratePDF(bestelList) {
  let doc = new jsPDF('p', 'pt', 'legal');

  bestelList.map((val) => {
    doc.text((val.Naam) + " " + (val.MinimaleVooraad, val.ActueleVoorraad), 20, 20)
  })

  doc.save('demo.pdf')
}

export default genaratePDF();