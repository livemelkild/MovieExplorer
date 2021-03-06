import { ICharacter } from './model';
import characters from './schema';

export default class CharacterService {
    
    public createCharacter(user_params: ICharacter, callback: any) {
        const _session = new characters(user_params);
        _session.save(callback);
    }

    public filterCharacter(query: any, callback: any) {
        characters.find(query, callback);
    }

    public updateCharacter(user_params: ICharacter, callback: any) {
        const query = { id: user_params._id };
        characters.findOneAndUpdate(query, user_params, callback);
    }
    
    public deleteCharacter(_name: String, callback: any) {
        const query = { name: name };
        characters.deleteOne(query, callback);
    }

}