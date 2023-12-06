// class SelectLogo {
//     async clickLogoUploadButton() {
//       const timeout = 30000; // Set the maximum time limit in milliseconds
//       const startTime = new Date().getTime();
//       while (true) {
//         try {
//           cy.xpath(
//             "//div[@class='upload-button']//button[@class='button-secondary']/span[text()='Upload']"
//           ).click({ force: true, multiple: true });
//           break;
//         } catch (error) {
//           const currentTime = new Date().getTime();
//           if (currentTime - startTime >= timeout) {
//             // If the maximum time limit is reached and the click still fails, throw an error
//             throw new Error(
//               `Timeout (${timeout}ms) reached. SelectLogo button not successful.`
//             );
//           }
//         }
//       }
//     }
//   }
