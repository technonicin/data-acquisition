/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};
function MyDropzone({ fileType, maxFiles }) {

  const style = useMemo(() => ({
    ...baseStyle,
  }))

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: maxFiles, accept: fileType })

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag &lsquo;n&rsquo; drop some files here, or click to select files</p>
      </div>
    </div>
  )
}

export default MyDropzone