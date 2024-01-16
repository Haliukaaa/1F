export default function UserProfile({
  firstName,
  lastName,
  img,
  jobTitle,
  gender,
  email,
}) {
  return (
    <>
      <div
        className="user-profile"
        style={{
          ...styles.flex,
          ...styles.flexColumn,
          ...styles.borderRadius,
          ...styles.border,
          ...styles.userProfile,
        }}
        id="user-profile"
        key={key}
      >
        <div style={{ ...styles.relative, ...styles.imagecontainer }}>
          <div
            className="icon-container relative"
            style={{ ...styles.relative }}
            id="icon-container"
          ></div>
          <img
            className="profile-img"
            style={{ ...styles.img100, ...styles.absolute }}
            id="profile-img"
            src={img}
            alt="angry looking purple robot"
          />
        </div>
        <hr
          style={{
            ...styles.borderTop,
            ...styles.width100,
            ...styles.margin0,
          }}
        />
        <div
          className="text-container"
          style={{
            ...styles.textContainer,
            ...styles.flex,
            ...styles.flexColumn,
            ...styles.spaceBetween,
            ...styles.padding30And15,
          }}
          id="text-container"
        >
          <div
            className="fullname"
            style={{ ...styles.flex, ...styles.gap10 }}
            id="fullname"
          >
            <p className="firstname" style={{ ...styles.bold }} id="first-name">
              {firstName}
            </p>
            <p className="lastname" style={{ ...styles.bold }} id="last-name">
              {lastName}
            </p>
          </div>
          <div
            className="job-and-gender"
            style={{ ...styles.flex, ...styles.gap20 }}
            id="job-and-gender"
          >
            <p
              className="job-title"
              id="job-title"
              style={{ ...styles.margin0 }}
            >
              {jobTitle}
            </p>
            <p className="gender" id="gender" style={{ ...styles.margin0 }}>
              {gender}
            </p>
          </div>
          <div className="div">
            <p className="email" id="email">
              {email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  root: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Open sans, sans-serif",
  },
  container: { margin: "30px 50px" },
  userProfile: { width: 300, height: "fit-content" },
  imagecontainer: { height: 300 },
  textContainer: { height: 150 },
  icon: { left: "85%", top: 30, fontSize: 20 },
  flex: { display: "flex" },
  rowWrap: { flexDirection: "row", flexWrap: "wrap" },
  flexCenter: { justifyContent: "center", alignItems: "center" },
  flexColumn: { flexDirection: "column" },
  spaceBetween: { justifyContent: "space-between" },
  borderRadius: { borderRadius: 10 },
  border: { border: "1px solid rgba(0, 0, 0, 0.25)" },
  borderTop: { borderTop: "1px solid rgba(0, 0, 0, 0.25)" },
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  gap10: { gap: 10 },
  gap20: { gap: 20 },
  gap25: { gap: 25 },
  gap50: { gap: 50 },
  padding30And15: { padding: "10px 15px" },
  img100: { width: "100%", height: "100%", objectFit: "cover" },
  bold: { fontWeight: "bold" },
  red: { color: "pink" },
  width100: { width: "100%" },
  margin0: { margin: 0 },
};
