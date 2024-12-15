import styles from './UserProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.userInfo}>
            </div>
            <div className={styles.avatarSection}>
                <img
                    src="https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456437194820220.jpg"
                    alt="User Avatar"
                    className={styles.avatarImage}
                />
                <button className={styles.changeAvatarButton}>Change avatar</button>
                <button className={styles.changeProfileButton}>Change profile</button>
            </div>
        </div>
    );
};

export default UserProfile;
