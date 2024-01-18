# Video and Image Processing Microservice API

This microservice API provides two endpoints for video and image processing.

## Endpoints

### 1. Converting/Compressing endpoint

#### Endpoint URL

`/compressMp4ToMp4`

#### Description

Receives a video file and returns it converted and/or compressed in mp4 format.

#### Request

- **Method:** POST
- **Headers:** None
- **Body:**
  - **video:** Video file to be converted (Supported formats: mp4, gif, etc.)

#### Response

- **Content Type:** video/mp4
- **Headers:**
  - `Content-Disposition`: inline; filename="<output_filename>"
- **Body:** Converted/compressed video in mp4 format

### 2. Formatting Endpoint

#### Endpoint URL

`/compressImage`

#### Description

Receives an image file and returns it compressed in webp format.

#### Request

- **Method:** POST
- **Headers:** None
- **Body:**
  - **image:** Image file to be formatted (Supported formats: jpeg, png, etc.)

#### Response

- **Content Type:** image/webp
- **Headers:**
  - `Content-Disposition`: inline; filename="<output_filename>"
- **Body:** Formatted image in webp format

## Getting Started

To run the microservice, follow these steps:

1. Install dependencies:

   ```bash
   npm install

   ```

2. Start the server:

   ```bash
   npm start

   ```

3. The server will be running at `http://localhost:3000`.

## Dependencies

- `Express`: Fast, unopinionated, minimalist web framework for Node.js.
- `express-formidable`: A middleware for handling forms with file uploads in Express.
- `fluent-ffmpeg`: A fluent API to FFMPEG for Node.js.
- `sharp`: High-performance image processing library for Node.js.

## Code Structure

The server code is organized as follows:

- server_modules/compressMp4.js: Module for converting/compressing video files to mp4 format.
- server_modules/formatting.js: Module for compressing and formatting image files to webp format.
