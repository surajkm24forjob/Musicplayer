import React from 'react'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

export const Sidenav = () => {
  return (
    <>
    <nav class="navbar fixed-bottom bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
  <div class="container-fluid justify-content-center">
    <a class="navbar-brand justify-content-center" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        <a class="nav-link px-5" aria-current="page" href="#"><FeedOutlinedIcon/>  Feed</a>
        <a class="nav-link px-5" href="#"><MusicNoteOutlinedIcon/> Player</a>
        <a class="nav-link px-5" href="#"><TrendingUpOutlinedIcon/> Trending</a>
        <a class="nav-link px-5" href='#'><LibraryMusicOutlinedIcon/> Library</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
