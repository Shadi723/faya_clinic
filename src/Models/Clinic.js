export class Clinic{
    constructor(id,title, abstract, mainSection, subSection, imgUrl) {
      this.id = id;
      this.title = title;
      this.abstract = abstract;
      this.mainSection = mainSection;
      this.subSection = subSection;
      this.imgUrl= imgUrl;
    }

}

const clinicConverter = {
    toFirestore(clinic: Clinic): firebase.firestore.DocumentData {
      return {id: clinic.id, title: clinic.title, 
              abstract: clinic.abstract, mainSection: clinic.mainSection,
              subSection: clinic.subSection, imgUrl: clinic.imgUrl};
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Post {
      const data = snapshot.data(options);
      return new Clinic(data.id, data.title, data.abstract, data.mainSection, data.subSection, data.imgUrl);
    }
  };