import React from 'react';
import {useRegisterFormState} from "../../../contexts/RegisterFormContext";
import Input from '../../../components/form/input'

export const RegisterStep3 =  () =>   {
    const {
        state: { facebookLink, twitterLink, instagramLink, youtubeLink, spotifyLink, deezerLink, appleMusicLink, soundcloudLink } ,
        dispatch
    } = useRegisterFormState();

    return (
        <div>
            <h2 className="text-3xl mb-6 font-bold text-white">Vos liens</h2>
            <h3 className="text-xl text-ym-blue font-bold mb-4">Réseaux sociaux</h3>
            <form className="flex flex-wrap text-ym-grey">
                <div className="grid gap-4 grid-cols-2 w-full">
                    <Input label="Facebook" name="facebookLink"
                           handleChange={e => dispatch({ type: "FACEBOOK_LINK_CHANGE", payload: e.target.value })}
                           value={facebookLink}/>
                    <Input label="Twitter" name="twitterLink"
                           handleChange={e => dispatch({ type: "TWITTER_LINK_CHANGE", payload: e.target.value })}
                           value={twitterLink}/>
                    <Input label="Instagram" name="instagramLink"
                           handleChange={e => dispatch({ type: "INSTAGRAM_LINK_CHANGE", payload: e.target.value })}
                           value={instagramLink}/>
                    <Input label="Youtube" name="youtubeLink"
                           handleChange={e => dispatch({ type: "YOUTUBE_LINK_CHANGE", payload: e.target.value })}
                           value={youtubeLink}/>
                </div>
            </form>
            <h3 className="text-xl text-ym-blue font-bold my-4">Streaming</h3>
            <form className="flex flex-wrap text-ym-grey">
                <div className="grid gap-4 grid-cols-2 w-full">
                    <Input label="Spotify" name="spotifyLink"
                           handleChange={e => dispatch({ type: "SPOTIFY_LINK_CHANGE", payload: e.target.value })}
                           value={spotifyLink}/>
                    <Input label="Deezer" name="deezerLink"
                           handleChange={e => dispatch({ type: "DEEZER_LINK_CHANGE", payload: e.target.value })}
                           value={deezerLink}/>
                    <Input label="Apple Music" name="appleMusicLink"
                           handleChange={e => dispatch({ type: "APPLE_MUSIC_LINK_CHANGE", payload: e.target.value })}
                           value={appleMusicLink}/>
                    <Input label="Soundcloud" name="soundcloudLink"
                           handleChange={e => dispatch({ type: "SOUNDCLOUD_LINK_CHANGE", payload: e.target.value })}
                           value={soundcloudLink}/>
                </div>
            </form>
        </div>
    );
}