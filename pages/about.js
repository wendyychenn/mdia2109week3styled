export default function About() {
    return(
        <div>About page</div>
    )
}

<div className={styles.grid}>
          <div><b>Business Degree:</b></div>
          {
            information && information.map((info, index) => {
              if (info.department === "Business") {
                return (
                  <Card key={index} degree={info.degree} colour="red" font="10px" />
                )
              }
            })
          }
         <div><b>Computing Degree:</b></div>
          {
            information && information.map((info, index) => {
              if (info.department.toLowerCase() === "computing") {
                return (
                  <Card key={index} degree={info.degree} colour="blue" font="30px" />
                )
              }
            })
          }
        </div>