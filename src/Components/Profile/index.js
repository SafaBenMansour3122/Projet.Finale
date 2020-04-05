import React from 'react';
import {ProfileSection , ProfileD , ProfileTitle , Span , ProfileList, ProfileItem,SpanItem,SpanWeb} from './style.js'


    const Profile = () => {

    return (
        <ProfileSection>
            <div className="container">
                <ProfileD>
                    <ProfileTitle><Span>Mon </Span> Profil</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <SpanItem>Nom</SpanItem>
                            FouFa
                        </ProfileItem>
                    
                        <ProfileItem>
                            <SpanItem>Adresse</SpanItem>
                            Tunis
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Téléphone </SpanItem>
                            44 555 666
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Email</SpanItem>
                            FouFa@foufa.com
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Website</SpanItem>
                            <SpanWeb className="web">www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileD>
            </div>
        </ProfileSection>
        );
    }

    export default Profile;