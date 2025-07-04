# MoviesDatabase API Integration

This project explores how to read and understand API documentation in order to effectively consume the MoviesDatabase RESTful API. It focuses on reviewing endpoints, authentication, and handling responses using TypeScript.

## API Overview

The MoviesDatabase API allows developers to access movie-related data including:
- Movie details (title, synopsis, release date, genres)
- Search for movies by title or keyword
- Fetch top-rated and trending movies
- Access cast and crew information
- Get similar or recommended movies

This API is ideal for building movie apps, recommendation engines, and media dashboards.

## API Version

**Version:** v1 (as specified in the documentation)

## Available Endpoints

| Endpoint | Description |
|----------|-------------|
| `/movies/{id}` | Get full details of a specific movie by its ID |
| `/movies/top_rated` | Get a list of top-rated movies |
| `/movies/search?query=...` | Search movies based on keywords or titles |
| `/movies/{id}/similar` | Get movies similar to the selected movie |
| `/movies/{id}/credits` | Get cast and crew of a movie |

## Request and Response Format

### Request Example:

```http
GET https://api.moviesdatabase.com/v1/movies/12345
Headers:
  Authorization: Bearer YOUR_API_KEY
