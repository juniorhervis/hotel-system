<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CustomAuthenticate
{
    public function handle(Request $request, Closure $next)
    {
//        if (csrf_token()) {
//            return response()->json(['error' => 'Unauthenticated.'], Response::HTTP_UNAUTHORIZED);
//        }

        return $next($request);
    }
}
