import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  
  // genera visualmente que hay una dependencia de axios en nuestro servicio
  private readonly axios: AxiosInstance = axios;

  
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=2');

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no:number = +segments[ segments.length -2 ];

    })


    return data.results;
  }
}
