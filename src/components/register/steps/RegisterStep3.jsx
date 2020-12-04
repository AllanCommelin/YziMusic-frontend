import React from 'react';
import {useRegisterFormState} from "../../../contexts/RegisterFormContext";
import Input from '../../../components/form/input'

export const RegisterStep3 =  () =>   {
    const {
        state: { facebookLinks, twitterLinks, instagramLinks, youtubeLinks, spotifyLinks, deezerLinks, appleMusicLinks, soundcloudLinks } ,
        dispatch
    } = useRegisterFormState();

    return (
        <div>
            <h2 className="text-3xl mb-6 font-bold text-white">Vos liens</h2>
            <h3 className="text-xl text-ym-blue font-bold mb-4">Réseaux sociaux</h3>
            <form className="flex flex-wrap text-ym-grey">
                <div className="grid gap-4 grid-cols-2 w-full">
                    <Input label="Facebook" name="facebookLinks"
                           handleChange={e => dispatch({ type: "FACEBOOK_LINKS_CHANGE", payload: e.target.value })}
                           value={facebookLinks}/>
                    <Input label="Twitter" name="twitterLinks"
                           handleChange={e => dispatch({ type: "TWITTER_LINKS_CHANGE", payload: e.target.value })}
                           value={twitterLinks}/>
                    <Input label="Instagram" name="instagramLinks"
                           handleChange={e => dispatch({ type: "TWITTER_LINKS_CHANGE", payload: e.target.value })}
                           value={instagramLinks}/>
                    <Input label="Youtube" name="youtubeLinks"
                           handleChange={e => dispatch({ type: "TWITTER_LINKS_CHANGE", payload: e.target.value })}
                           value={youtubeLinks}/>
                </div>
            </form>
            <h3 className="text-xl text-ym-blue font-bold my-4">Streaming</h3>
            <form className="flex flex-wrap text-ym-grey">
                <div className="grid gap-4 grid-cols-2 w-full">
                    <Input label="Spotify" name="spotifyLinks"
                           handleChange={e => dispatch({ type: "SPOTIFY_LINKS_CHANGE", payload: e.target.value })}
                           value={spotifyLinks}/>
                    <Input label="Deezer" name="deezerLinks"
                           handleChange={e => dispatch({ type: "DEEZER_LINKS_CHANGE", payload: e.target.value })}
                           value={deezerLinks}/>
                    <Input label="Apple Music" name="appleMusicLinks"
                           handleChange={e => dispatch({ type: "APPLE_MUSIC_LINKS_CHANGE", payload: e.target.value })}
                           value={appleMusicLinks}/>
                    <Input label="Soundcloud" name="soundcloudLinks"
                           handleChange={e => dispatch({ type: "SOUNDCLOUD_LINKS_CHANGE", payload: e.target.value })}
                           value={soundcloudLinks}/>
                </div>
            </form>
        </div>
    );
}