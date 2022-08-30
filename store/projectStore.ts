import TileData from "~/types/TileDataType"
import projects from "~/components/Assets/Data/projects"
import { defineStore, acceptHMRUpdate } from 'pinia'


export const useStore = defineStore('projects', {
  state: () => {
    return {
      projects: projects as TileData[],
    }
  },
  getters:{
    get(): TileData[]{
      return this.projects;
    },
    projectL(): TileData[]{
      return this.projects.filter(e => e.id % 2 !== 0);
    },
    projectR(): TileData[] {
      return this.projects.filter(e => e.id % 2 === 0);
    },
  }
})
