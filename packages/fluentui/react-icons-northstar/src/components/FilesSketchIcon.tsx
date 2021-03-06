import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const FilesSketchIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M20.5 8H15c-.4 0-.777.156-1.083.463l-3.478 3.968c-.283.283-.439.66-.439 1.06V22.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm-6.514 1.9V13h-2.718l2.718-3.1zM21 22.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V14h3.986V9.003c.005 0 .01-.003.014-.003h5.5a.5.5 0 0 1 .5.5v13zm-3.426-7.313h-2.648l-1.066.534-1.27 1.246 3.66 5.067 3.66-5.067-1.189-1.188-1.147-.591zm-2.5.626h2.352l.375.187-.375.188h-2.352L14.699 16l.375-.188zm.143 1h2.066l.516 1.375h-3.098l.516-1.375zm-1.155-.433l.547.274-.504 1.342-.696-.963.653-.653zm.633 2.433h3.11l-1.555 2.153-1.556-2.154zm3.7-.817l-.504-1.342.547-.274.653.653-.696.963z" />
      </g>
    </svg>
  ),
  displayName: 'FilesSketchIcon',
});

export default FilesSketchIcon;
